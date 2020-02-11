import axios from "axios";
import queryString from "query-string";

// 글 쓰기
export const writePost = ({ title, body, tags }) =>
  axios.post("/api/posts", { title, body, tags });

// 글 취득
export const getPost = id => axios.get(`/api/posts/${id}`);

// 글 리스트 취득
export const getPostList = ({ tag, page }) =>
  axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);

// 글 수정
export const editPost = ({ id, title, body, tags }) =>
  axios.patch(`/api/posts/${id}`, { title, body, tags });

// 글 삭제
export const removePost = id => axios.delete(`/api/posts/${id}`);

// 로그인
export const login = password => axios.post("/api/auth/login", { password });

// 로그인체크
export const checkLogin = () => axios.get("/api/auth/check");

// 로그아웃
export const logout = () => axios.post("/api/auth/logout");
