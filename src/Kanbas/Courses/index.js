import React from 'react';
import { useParams, useLocation, Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from './CourseNavigation';
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments/assignment';
import AssignmentEditor from './Assignments/AssignmentEditor';
import './style.css';
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    
    const URL = "http://localhost:4000/api/courses";
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
        `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    const location = useLocation();
    const loc = location.pathname.split("/");
    const currentBreadcrumb = decodeURIComponent(loc.pop());

    // const course = courses.find((c) => c._id === courseId);
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);
    

    return (
        // <div className='contianer-fluid'>
            <div className="content-wrapper">
                <div className="fixed-header" style={{ overflowY: 'auto', height: '100vh' }}>
                    <div className="section-top" style={{ width: '100% !important', flex: 1 }}>
                        <div className="menu-icon text-danger">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="profile-name" style={{ marginTop: 15, flex: 1 }}> 
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb" style={{fontSize: 20}}>
                                    <li className="breadcrumb-item text-danger">{course.name}</li>
                                    <li className="breadcrumb-item text-danger">{course._id}</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {currentBreadcrumb}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div>
                            <button class="btn btn-secondary color-change btn btn-light float-end margin-right-100 margin-top-10">
                                <FontAwesomeIcon icon={faGlasses} className="icon-spacing margin-right-5" />
                                                Student View            
                            </button>
                        </div>
                            
                        
                    </div>
                    <hr />

                    <div className="flex-container">
                        <CourseNavigation />
                        <div className="route-content">
                            <Routes>
                                <Route path='/' element={<Navigate to="Home"/>} />
                                <Route path="Home" element={<Home/>} />
                                <Route path="Modules" element={<Modules/>}/>
                                <Route path="Assignments" element={<Assignments/>} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                                <Route path="Grades" element={<h1>Grades</h1>} />
                            </Routes>
                        </div>    
                    </div>
                </div>
            </div>
        // </div>
        
    );
}
export default Courses;
