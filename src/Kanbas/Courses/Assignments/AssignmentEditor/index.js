import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import db from "../../../Databases";
import './style.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignment.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="col-md-9 right-content">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-light float-right">
            <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
          </button>
          <button type="button" className="published-button-setup float-right button-margin">

            <FontAwesomeIcon icon={faCheckCircle} className="button-color" />
            <span className="button-color">
              <b>Published</b>
            </span>
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <label htmlFor="ASSIGNMENT-NAME" className="text-align-left">
            Assignment Name
          </label>
          <input
            id="ASSIGNMENT-NAME"
            value={assignment.title}
            className="form-control mb-2" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea
            cols="155"
            rows="5"
            className="form-control content-margin"
          >
            This is the Assignment Description
          </textarea>
        </div>
        </div>
        <div className="row">
            <div className="col-3 set-label content-margin">
            <label htmlFor="points">Points</label>
            </div>
            <div className="col-7 content-margin">
            <input type="text" value="100" id="points" className="form-control" />
            </div>
        </div>
        <div className="row">
            <div className="col-3 set-label content-margin">
                <label for="Assignment-Group">Assignment Group</label>
            </div>
            <div className="col-7 content-margin">
                <select id="Assignment-Group" className="form-control">
                    <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-3 set-label content-margin">
                <label for="Display-Grade">Display Grade as</label>
            </div>
            <div className="col-7 content-margin">
                <select id="Display-Grade" className="form-control">
                    <option value="PERCENTAGE" selected>Percentage</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-3 set-label content-margin">
            </div>
            <div className="col-7 content-margin">
                <input type="checkbox" value="Text Entry"
                name="check-entry-option" id="chkbox-entry"/>
                <label className="margin-left-10">Do not count this assignment towards final grade</label>
            </div>
        </div>

        <div className="row">
            <table width="94%" className="set-table content-margin">
                <tbody>
                <tr>
                    <td style={{ width: '27%' }} valign="top">
                    <label htmlFor="Submission-Type" className="content-margin float-right set-table-label">
                        Submission Type
                    </label>
                    </td>
                    <td style={{ border: '1px solid #ccc', paddingLeft: '20px' }}>
                    <select
                        id="Submission-Type"
                        style={{ width: '92.55%', marginTop: '20px' }}
                        className="form-control set-text-input"
                    >
                        <option value="ONLINE" selected>
                        Online
                        </option>
                    </select>
                    <br />

                    <label htmlFor="Online-Entry-Option">
                        <b>Online Entry Options</b>
                    </label>
                    <br />
                    <input
                        type="checkbox"
                        value="Text Entry"
                        className="bigger-checkbox margin-left-5"
                        name="check-entry-option"
                        id="chkbox-entry"
                    />
                    <label className="padding-left-5">Text Entry</label>
                    <br />
                    <input
                        type="checkbox"
                        value="Website-URL"
                        className="bigger-checkbox margin-left-5"
                        name="check-website-url"
                        id="chkbox-website"
                    />
                    <label className="padding-left-5">Website URL</label>
                    <br />
                    <input
                        type="checkbox"
                        value="Media-Recording"
                        className="bigger-checkbox margin-left-5"
                        name="check-media"
                        id="chkbox-media"
                    />
                    <label className="padding-left-5">Media Recording</label>
                    <br />
                    <input
                        type="checkbox"
                        value="Student-Annotation"
                        className="bigger-checkbox margin-left-5"
                        name="check-student-annotation"
                        id="chkbox-student-annotation"
                    />
                    <label className="padding-left-5">Student Annotation</label>
                    <br />
                    <input
                        type="checkbox"
                        value="File-Uploads"
                        className="bigger-checkbox margin-left-5"
                        name="check-file-uploads"
                        id="chkbox-file-uploads"
                    />
                    <label className="padding-left-5">File Uploads</label>
                    <br />
                    <br />

                    <label htmlFor="submission-attempt">
                        <b>Submission Attempts</b>
                    </label>
                    <br />
                    <select id="submission-attempt" className="form-control set-select">
                        <option value="UNLIMITED" selected>
                        Unlimited
                        </option>
                        <option value="ONCE">Once</option>
                        <option value="TWICE">Twice</option>
                        <option value="FIVE">Five</option>
                    </select>
                    <br />

                    <label htmlFor="plagiarism-id">
                        <b>Plagiarism Review</b>
                    </label>
                    <br />
                    <select id="plagiarism-id" className="form-control set-select">
                        <option value="NONE" selected>
                        None
                        </option>
                        <option value="YES">Yes</option>
                    </select>
                    <br />

                    <label htmlFor="Group-Assignment">
                        <b>Group Assignment</b>
                    </label>
                    <br />
                    <input
                        type="checkbox"
                        id="group-id"
                        className="bigger-checkbox margin-left-5 margin-top-10"
                    />
                    <label id="group-id" className="margin-left-10 ">This is a group assignment</label>
                    <br />
                    <br />

                    <label htmlFor="Peer-Reviews">
                        <b>Peer Reviews</b>
                    </label>
                    <br />
                    <input
                        type="checkbox"
                        id="peer-review-id"
                        className="bigger-checkbox margin-left-5 margin-top-10"
                    />
                    <label id="peer-review-id" className="margin-left-10">Require Peer Reviews</label>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="row" id="assign-table">
            <table width="94%" className="set-table content-margin">
                <tbody>
                <tr>
                    <td style={{ width: '27%' }} valign="top">
                    <label htmlFor="assign" className="content-margin float-right set-table-label">
                        Assign
                    </label>
                    </td>
                    <td className="set-table table-border padding-left">
                    <label className="control-label">
                        <b>Assign to</b>
                    </label>
                    <br />
                    <input className="form-control set-table-width" type="text" id="assign-to" value="Everyone" />
                    <br />

                    <label id="due-id" className="control-label">
                        <b>Due</b>
                    </label>
                    <br />
                    <input id="due-id" type="date" value="2021-01-01" className="form-control set-table-width" />
                    <br />

                    <table className="set-table-width">
                        <tbody>
                        <tr>
                            <td style={{ width: '48.5%' }}>
                            <label htmlFor="available-id">
                                <b>Available From</b>
                            </label>
                            <input id="available-id" type="date" value="2021-01-01" className="form-control" />
                            </td>
                            <td style={{ width: '48.5%' }}>
                            <label htmlFor="until-id">
                                <b>Until</b>
                            </label>
                            <input id="until-id" type="date" value="2021-01-01" className="form-control" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <table width="100%" className="table-background">
                        <tbody>
                        <tr>
                            <td>
                            <button type="button" className="form-control add-button">
                                +Add
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <hr />
        <div class="row">
            <div class="col-5 margin-top-10">
                <input type="checkbox" id="group-id" class="bigger-checkbox left-margin" />
                <label id="group-id" className="margin-left-10"> Notify users that this content has changed</label>
            </div>
            <div class="col-7">
                <form id="edit" action="../assignments/index.html">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light float-right">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger float-right">
                    Save
                </button>
                </form>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default AssignmentEditor;
