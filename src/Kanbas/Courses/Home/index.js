import ModuleList from "../Modules/ModuleList";
import './style.css';

function Home() {
    return (
        <div className="newflex">
        <ModuleList/>
        <div className="col-md-3 far-right-content" style={{paddingLeft: '25px'}}>
            <span>Course Status</span>
            <div className="button-group-1">
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-ban"></i>Unpublish</button>
                <button className="btn btn-success"><i className="fas fa-check-circle"></i>Published</button>
            </div>
            <div className="button-group-2">
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-file-code"></i> Import Existing Content</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-pencil-square"></i> Import from Commons</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-bullseye"></i> Choose Home Page</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-bar-chart"></i> View Course Stream</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-bullhorn"></i> New Announcement</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-bar-chart"></i> New Analytics</button>
                <button className="btn btn-secondary color-change btn btn-light"><i className="fa fa-bell"></i> View Course Notifications</button>
            </div>
            <div className="todo">
                <span>To-Do</span>
                <hr className="todo-hr" />
                <div className="grade-info">
                    <i className="fas fa-times close-icon ellipse-color-new" style={{ marginRight: '3px' }}></i>
                    <div className="table">
                        <div className="table-row">
                            <div className="icon-cell text-danger">
                                <i className="fas fa-circle"></i>
                            </div>
                            <div className="text-cell">
                                <a href="#" className="text-danger">Grade A1 - ENV + HTML</a>
                                <br />
                                <small className="text-danger grade-small">100 points • Sep 18 at 11:59 pm</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="calendar">
                <span>Coming Up</span>
                <div className="calendar-icon-text">
                    <i className="far fa-calendar-alt"></i>
                    <a href="#" className="text-danger view-calendar">View Calendar</a>
                </div>
            </div>
            <hr className="todo-hr" />
            <div className="cal-info">
                <div className="cal-row">
                    <i className="far fa-calendar-alt cal-icon"></i>
                    <div className="text">
                        <a href="#" className="text-danger">Lecture</a>
                        <br />
                        <small className="grade-small">CS5610.12631.202410<br />Sep 11 at 11:45am</small>
                    </div>
                </div>
                <div className="cal-info">
                    <div className="cal-row">
                        <i className="far fa-calendar-alt cal-icon"></i>
                        <div className="text">
                            <a href="#" className="text-danger">CS5610 06 SP23 Lecture</a>
                            <br />
                            <small className="grade-small">CS5610.12631.202410<br />Sep 11 at 6pm</small>
                        </div>
                    </div>
                    <div className="cal-info">
                        <div className="cal-row">
                            <i className="far fa-calendar-alt cal-icon"></i>
                            <div className="text">
                                <a href="#" className="text-danger">CS5610 Web Development<br /> Summer 1 2023 - LECTURE</a>
                                <br />
                                <small className="grade-small">CS5610.12631.202410<br />Sep 11 at 7pm</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;
