const Router = require("koa-router");
const postCtrl = require("./post.ctrl");

const posts = new Router();

posts.get("/", postCtrl.list);
posts.get("/:id", postCtrl.checkObjectId, postCtrl.read);

posts.post("/", postCtrl.checkLogin, postCtrl.write);
posts.delete(
  "/:id",
  postCtrl.checkLogin,
  postCtrl.checkObjectId,
  postCtrl.remove
);
// posts.put("/:id", postCtrl.replace);
posts.patch(
  "/:id",
  postCtrl.checkLogin,
  postCtrl.checkObjectId,
  postCtrl.update
);

module.exports = posts;
