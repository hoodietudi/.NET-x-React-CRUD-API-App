const API_BASE_URL_DEVELOPMENT = "https://localhost:7022";

const ENDPOINTS = {
  GET_ALL_POSTS: "get-all-posts",
  GET_POSTS_BY_ID: "get-posts-by-id",
  CREATE_POST: "create-post",
  UPDATE_POST: "update-post",
  DELETE_POST_BY_ID: "delete-post-by-id",
};

const development = {
  API_URL_GET_ALL_POSTS: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_POSTS}`,
  API_URL_GET_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_POSTS_BY_ID}`,
  API_URL_CREATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_POST}`,
  API_URL_UPDATE_POST: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_POST}`,
  API_URL_DELETE_POST_BY_ID: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_POST_BY_ID}`,
};

const Constants = process.env.NODE_ENV === "development" ? development : null;

export default Constants;
