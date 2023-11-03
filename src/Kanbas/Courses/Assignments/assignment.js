import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faPlus,
  faEllipsisV,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';


import {
  deleteAssignment
} from './assignmentsReducer';


function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
  const dispatch = useDispatch();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const confirmDelete = () => {
      dispatch(deleteAssignment(assignmentToDelete))
      setShowConfirmationDialog(false);
  };

  const cancelDelete = () => {
      setShowConfirmationDialog(false);
  };

  const setdeleteAssignment = (event, assignmentId) => {
    event.preventDefault(); 
    event.stopPropagation();
    setAssignmentToDelete(assignmentId);
    setShowConfirmationDialog(true);
};

  const createNewAssignment = () => {
      navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  

  return (
    <div style={{marginLeft:5,width:1100}}>
    <div className="padding-left-30">
      <div className="row">
        <div className="col-7">
          <input type="text" className="form-control margin-top input-text-width" placeholder="Search for Assignments" id="Assignment-Names" />
        </div>
        <div className="col-5 margin-top">
          <button type="button" className="btn btn-light float-right">
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          <button type="button" className="btn btn-danger float-right" onClick={createNewAssignment}>+Assignment</button>
          <button type="button" className="btn btn-light float-right">+Group</button>    
          <div className="dropdown-menu ">
            <button className="dropdown-item" type="button" id="edit-assignment-dates">Edit Assignment Dates</button>
            <button className="dropdown-item" type="button" id="speed-grader">Speed Grader</button>
          </div>
        </div>
      </div>
      <hr style={{marginTop: 15}}/>
      
      <div className="row margin-top-20">
        <div className="col-md-8 assignment-container d-flex align-items-center custom-background custom-right-padding height">
          <div className="p-container custom-background set-heading">
            <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
            <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
            <p className="assignment-title mb-0 custom-font-size margin-left-5">ASSIGNMENTS</p>
          </div>
          <div className="custom-left-padding">
            <button className="oval-button custom-background">40% of Total</button>
            <button className="custom-background" style={{ border: '0' }}>+</button>
            <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
          </div>
        </div>
      </div>
      <div className="row left-border">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <div className="d-flex align-items-center padding-top-10">
              <div className="drag-handle margin-bottom-20" draggable="true">
                <button type="button" className="left-button-setup">
                  <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
                  <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
                </button>
                <button type="button" className="left-button-setup">
                  <i className="far fa-clipboard pad-color"></i>
                  <FontAwesomeIcon icon={faClipboard} className="pad-color" />
                </button>
              </div>
              <div>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="set-font-style">
                                {assignment._id} - {assignment.title}
                </Link>
                <br />
                <p className="assignment-text">
                    <span >{assignment.description}</span> | 100 pts
                </p>
              </div>
              <div className="margin-bottom-20 margin-left" style={{ paddingRight: 33 }}>
                <button style={{ marginRight: "10px" }}
                                className="btn btn-danger deleteButton"
                                onClick={(event) => setdeleteAssignment(event, assignment._id)}>
                                Delete
                </button>
                <button type="button" className="button-setup" disabled>
                  <FontAwesomeIcon icon={faCheckCircle} className="correct-symbol" />
                </button>
                <button type="button" className="button-setup">
                  <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
                </button>
              </div>
            </div>
            <hr style={{margin: "0rem"}}/>
          </Link>
        ))}
        {showConfirmationDialog && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to delete this assignment?</p>
                    <button className="btn btn-success" onClick={confirmDelete}>Yes</button>
                    <button className="btn btn-danger deleteButton" onClick={cancelDelete}>No</button>
                    <button className="btn btn-light deleteButton" onClick={cancelDelete}>Cancel</button>
                </div>
            )}
      </div>
      </div>
    </div>
  );
}

export default Assignments;
