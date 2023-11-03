import { createSlice } from "@reduxjs/toolkit";
import db from "../../Databases";

const initialState = {
  assignments: db.assignment,
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
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments
      ];
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
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  }
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
