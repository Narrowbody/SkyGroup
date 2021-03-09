import http from "constants/http-common";

const getAll = () => {
  return http.get("/courses");
};

const get = id => {
  return http.get(`/courses/${id}`);
};

const create = data => {
  return http.post("/courses", data);
};

const update = (id, data) => {
  return http.put(`/courses/${id}`, data);
};

const remove = id => {
  return http.delete(`/courses/${id}`);
};

const removeAll = () => {
  return http.delete(`/courses`);
};

const findByTitle = title => {
  return http.get(`/courses?title=${title}`);
};

export default { getAll, get, create, update, remove, removeAll, findByTitle };