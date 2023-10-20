import { Link, useParams, useLocation } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", 
                "Assignments", "Quizzes", "Grades", "People",
                "Panopto Video", "Discussion", "Announcement",
                "Pages", "Files", "Rubrics", "Outcomes",
                "Collaborations", "Syllabus", "Settings"];

  const privateLinks = ["Announcement",
  "Pages", "Files", "Rubrics", "Outcomes",
  "Collaborations", "Syllabus", "Settings"]

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <nav className="col-md-4 d-md-block left-navigation text-danger">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`text-danger ${pathname.includes(encodeURIComponent(link)) ? "selected" : ""}`}
            >
              {link}
              {privateLinks.includes(link) ? 
                <FontAwesomeIcon 
                  icon={faEyeSlash} 
                  style={{ marginLeft: 'auto', color: 'gray', float: "right"}}
                /> 
                : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default CourseNavigation;