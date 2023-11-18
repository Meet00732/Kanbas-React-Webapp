import axios from "axios";
// const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";
const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "https://kanbas-node-server-app-2-sj3b.onrender.com/api";
const COURSES_URL = `${API_BASE}/courses`;
const ASSIGNMENTS_URL = `${API_BASE}/assignments`;

export const findAssignmentForCourse = async (courseId) => {
    const response = await axios
      .get(`${COURSES_URL}/${courseId}/assignments`);
      console.log(response.data);
    return response.data;
  
  };
  
  export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    console.log(response.data);
    return response.data;
  };
  
  export const deleteAssignment = async (assignmentId) => {
    const response = await axios
      .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
  };
  
  export const updateAssignment = async (assignment) => {
    const response = await axios.
      put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
  };