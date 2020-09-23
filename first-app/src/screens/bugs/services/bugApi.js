import axios from "axios";

const serviceEndPoint = "http://localhost:3000/bugs";

function getAll() {
  return axios.get(serviceEndPoint).then(response => response.data);
}

function getById(id) {
  return axios.get(`${serviceEndPoint}/${id}`).then(response => response.data);
}

function save(bugData) {
  if (bugData.id === 0) {
    return axios
      .post(`${serviceEndPoint}`, bugData)
      .then(response => response.data);
  } else {
    return axios
      .put(`${serviceEndPoint}/${bugData.id}`, bugData)
      .then(response => response.data);
  }
}

function remove(bug) {
  return axios
    .delete(`${serviceEndPoint}/${bug.id}`)
    .then(response => response.data);
}

export default {
  getAll,
  getById,
  save,
  remove
};
