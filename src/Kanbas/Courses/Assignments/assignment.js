import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Databases";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faGripVertical, faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();

  const assignments = db.assignment;
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);

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
          <button type="button" className="btn btn-danger float-right">+Assignment</button>
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
                <a href="edit.html" className="set-font-style">{assignment._id} - {assignment.title}</a><br />
                <p className="assignment-text">
                  week 0 - SETUP - Week starting Monday September 5th (09/05/2022) Module | <br />
                  <b>Due</b> September 18, 2022 at 11:59pm | 100 pts
                </p>
              </div>
              <div className="margin-bottom-20 margin-left" style={{ paddingRight: 33 }}>
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
      </div>
      </div>
    </div>
  );
}

export default Assignments;
