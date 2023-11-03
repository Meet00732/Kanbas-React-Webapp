import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEdit} from "@fortawesome/free-solid-svg-icons";
import db from "../Databases";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) 
{
  // const [courses, setCourses] = useState(db.courses);

  // const [selectedCourseId, setSelectedCourseId] = useState(null);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  
  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };


  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };



  // const addNewCourse = () => {
  //   if (courses.some(c => c._id === course._id)) {
  //     alert('Course with this ID already exists');
  //     return;
  //   }
  //   setCourses([...courses, course]);
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  return (
    <div className="content-wrapper">
      <div className="fixed-header">
        <div className="section-top">
          <div className="dashboard">
            <strong>Dashboard</strong>
          </div>
        </div>
        <hr />
      </div>
      <div className="inner-content">
        <div className="published">Published Courses(24)</div>
        <hr />
      </div>
      
      <div className="course-card-container">
        {courses.map((course) => (
          <div key={course._id} className="course-card col-md-3 col-lg-3">
            <div className="card">
              <div className="upper-half darkblue">
                <FontAwesomeIcon icon={faEllipsisV} className="dots" />
              </div>
              <div className="lower-half">
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <div className="font-darkblue">{course._id} {course.name}</div>
                  <div className="course-number">{course.number}.{course._id}</div>
                  <div className="course-start">{course.startDate} - {course.endDate}</div>
                </Link>
                <FontAwesomeIcon
                  icon={faEdit} 
                  className="dots" 
                  // onClick={() => handleCourseSelection(course._id)} 
                />
                <br/>
                <button className="btn btn-danger" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                  Delete
                </button>

                <button className="btn btn-primary" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  Edit
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="addButton" >
        Add
      </button>
      <button onClick={updateCourse} className="updateButton" >
        Update
      </button>

      </div>
  );
}

export default Dashboard;
