import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Databases";

const initialState = {
  assignments: [],
  assignment: {
    name: '',
    description: '',
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: ''
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignments: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        assignment => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = action.payload;
      }
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  }
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
