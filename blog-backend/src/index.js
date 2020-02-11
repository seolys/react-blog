require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");

const api = require("./api");

const mongoose = require("mongoose");

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI,
  COOKIE_SIGN_KEY: signKey
} = process.env;

const sessionConfig = {
  maxAge: 86400000
};

mongoose.Promise = global.Promise;
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to gongodb");
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

app.use(session(sessionConfig, app));
app.keys = [signKey];

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log("listening to port", port);
});
