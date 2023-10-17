import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// uploading video

export const uploadVideo = async (body) => {
  // call post http request to http://localhost:4000/ and return response to Add component
  return await commonAPI("POST", `${serverURL}/videos`, body);
};

// get all videos

export const getAllVideos = async () => {
  // call get http request to http://localhost:4000/ and return response to View component
  return await commonAPI("GET", `${serverURL}/videos`, "");
};

// get a single video

export const getVideo = async (id) => {
  // call get http request to http://localhost:4000/id and return response to VideoCard component
  return await commonAPI("GET", `${serverURL}/videos/${id}`, "");
};

// delete a single video

export const deleteVideo = async (id) => {
  // call delete http request to http://localhost:4000/id and return response to VideoCard component
  return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {});
};

// store video watching history to json server

export const addHistory = async (videoHistory) => {
  // call post http request to http://localhost:4000/history and return response to Videocard component
  return await commonAPI("POST", `${serverURL}/history`, videoHistory);
};

// to get history from json server

export const getHistory = async () => {
  // call get http request to http://localhost:4000/history and return response to Videocard component
  return await commonAPI("GET", `${serverURL}/history`, "");
};

// to add category

export const saveCategory = async (body) => {
  // call post http request to http://localhost:4000/categories and return response to Category component
  return await commonAPI("POST", `${serverURL}/categories`, body);
};

// to get category

export const getCategory = async () => {
  // call get http request to http://localhost:4000/category and return response to Category component
  return await commonAPI("GET", `${serverURL}/categories`, "");
};

// delete a single video

export const deleteCategory = async (id) => {
  // call delete http request to http://localhost:4000/categories/id and return response to Category component
  return await commonAPI("DELETE", `${serverURL}/categories/${id}`, {});
};

// to update category from json server

export const updateCategory = async (id, body) => {
  // call put http request to http://localhost:4000/categoies/id to update category and return response to Category component
  return await commonAPI("PUT", `${serverURL}/categories/${id}`, body);
};

// delete a single video from history

export const deleteHistoryVideo = async (id) => {
  // call delete http request to http://localhost:4000/history/id and return response to Watch history component
  return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};