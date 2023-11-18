import axios from "axios";

// const MODULES_URL = "http://localhost:4000/api/modules";
// const MODULES_URL = "https://kanbas-node-server-app-2-sj3b.onrender.com/api/modules";
const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "https://kanbas-node-server-app-2-sj3b.onrender.com/api";
const COURSES_URL = `${API_BASE}/courses`;
const MODULES_URL = `${API_BASE}/modules`;
  

export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
    console.log(response.data);
  return response.data;

};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};




