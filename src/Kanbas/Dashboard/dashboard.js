import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEdit} from "@fortawesome/free-solid-svg-icons";
import db from "../Databases";
import './style.css';

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="content-wrapper">
      <div className="fixed-header">
        <div className="section-top">
          <div className="dashboard">
            <strong>Dashboard</strong>
          </div>
        </div>
        <hr /> {/* Corrected: Self-closing <hr> */}
      </div>
      <div className="inner-content">
        <div className="published">Published Courses(24)</div>
        <hr /> {/* Corrected: Self-closing <hr> */}
      </div>
      <div className="course-card-container">
        {courses.map((course) => (
          <div key={course._id} className="course-card col-md-3 col-lg-3">
            <div className="card">
              <div className="upper-half darkblue">
                <FontAwesomeIcon icon={faEllipsisV} className="dots" />
              </div>
              <div className="lower-half">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <div className="font-darkblue">{course._id} {course.name}</div>
                  <div className="course-number">{course.number}.{course._id}</div>
                  <div className="course-start">{course.startDate} - {course.endDate}</div>
                  <FontAwesomeIcon icon={faEdit} className="dots"/>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
