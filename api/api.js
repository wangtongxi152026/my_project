import ajax from './ajax';
// let ajax = this.$axios,
// export default {
//    register: axios.post('/blog/register', params);
// }

export function getUserInfo() {
  console.log('getUserInfo');
  return ajax.get('/blog/getUserInfo');
}
export function currentUser() {
   
  return ajax.get('/blog/currentUser');
}

export function login(params) {
  return ajax.post('/blog/login', params);
}
export function logout(params) {
  return ajax.post('/blog/logout', params);
}
export function register(params) {
  return ajax.post('/blog/register', params);
}
export function getUser(params) {
  return ajax.post('/blog/getUser', params);
}

export function addComment(params) {
  return ajax.post('/blog/addComment', params);
}
export function addThirdComment(params) {
  return ajax.post('/blog/addThirdComment', params);
}

export function getCommentList(params) {
  return ajax.post('/blog/getCommentList', params);
}
export function getArticleList(params) {
  return ajax.post('/blog/getArticleList', params);
}
export function getArticleListAdmin(params) {
  return ajax.get('/blog/getArticleListAdmin', params);
}
export function likeArticle(params) {
  return ajax.post('/blog/likeArticle', params);
}
export function getArticleDetail(params) {
  return ajax.post('/blog/getArticleDetail', params);
}
export function addMessage(params) {
  return ajax.post('/blog/addMessage', params);
}
export function getMessageList(params) {
  return ajax.post('/blog/getMessageList', params);
}
export function getMessageDetail(params) {
  return ajax.post('/blog/getMessageDetail', params);
}
export function getLinkList(params) {
  return ajax.post('/blog/getLinkList', params);
}
export function getTagList(params) {
  return ajax.post('/blog/getTagList', params);
}
export function getCategoryList(params) {
  return ajax.post('/blog/getCategoryList', params);
}
export function getTimeAxisList(params) {
  return ajax.post('/blog/getTimeAxisList', params);
}
export function getTimeAxisDetail(params) {
  return ajax.post('/blog/getTimeAxisDetail', params);
}
export function getProjectList(params) {
  return ajax.post('/blog/getProjectList', params);
}
export function getProjectDetail(params) {
  return ajax.post('/blog/getProjectDetail', params);
}

// export const urls: object = {
//   login: "login",
//   logout: "logout",
//   register: "register",
//   getUser: "getUser",
//   addComment: "addComment",
//   addThirdComment: "addThirdComment",
//   getCommentList: "getCommentList",
//   getArticleList: "getArticleList",
//   likeArticle: "likeArticle",
//   getArticleDetail: "getArticleDetail",
//   addMessage: "addMessage",
//   getMessageList: "getMessageList",
//   getMessageDetail: "getMessageDetail",
//   getLinkList: "getLinkList",
//   getTagList: "getTagList",
//   getCategoryList: "getCategoryList",
//   getTimeAxisList: "getTimeAxisList",
//   getTimeAxisDetail: "getTimeAxisDetail",
//   getProjectList: "getProjectList",
//   getProjectDetail: "getProjectDetail"
// };

// export default urls;
