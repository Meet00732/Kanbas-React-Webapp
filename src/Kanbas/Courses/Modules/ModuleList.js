import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Databases";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPlus, faEllipsisV, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);

  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
        <div className="col-md-9 padding-left-30">
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-1 color-change btn btn-light">Collapse All</button>
            <button className="btn btn-secondary me-1 color-change btn btn-light">View Progress</button>
            <div className="dropdown me-2">
              <button className="btn btn-secondary dropdown-toggle color-change btn btn-light" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faCheckCircle} className="text-success btn-light" /> Publish All
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Publish</a></li>
              </ul>
            </div>
            <button className="btn btn-danger me-1">
              <FontAwesomeIcon icon={faPlus} className="icon-spacing2" /> Module
            </button>
            <button className="btn btn-secondary me-1 color-change btn btn-light">
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </div>
          <hr />
            <div className="mb3">
                <ul className="list-group module-groups">
                <li className="list-group-item">
                <div>
                  <input className="form-control redux-input"
                    type="text" 
                    placeholder="New Module" 
                    value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}

                  />
                  <textarea className="form-control redux-textarea"
                    placeholder="New Description" 
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                  }
                  />
                  <div style={{marginLeft: 10}}>
                    <button className="btn addButton"
                      onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button className="btn updateButton"
                      onClick={() => dispatch(updateModule(module))}>Update</button>
                  </div>
                </div>

                </li>

                {
                    modules.filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <div>
                                <li key={index} className="list-group-item list-group-item-secondary">
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color-new" />
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color-new icon-spacing2" />
                                    <FontAwesomeIcon icon={faCaretDown} className="icon-spacing2 margin-left-right" />
                                    {module.name}
                                    <div className="float-end">
                                        <div className="btn-group">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success icon-spacing dropdown-toggle margin-left-right" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu">
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faPlus} className="icon-spacing ellipse-color-new margin-left-right" />
                                        <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color-new margin-left-right" />
                                    </div>
                                    <button className="btn btn-primary"
                                      onClick={() => dispatch(setModule(module))}>
                                      Edit
                                    </button>

                                    <button className="btn btn-danger"
                                      onClick={() => dispatch(deleteModule(module._id))}>
                                      Delete
                                    </button>
                                </li>
                                <li class="list-group-item left-border-line">
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color-new" />
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color-new icon-spacing-head padding-left-8" />
                                    {module.description}
                                    <FontAwesomeIcon icon={faEllipsisV} className="float-end ellipse-color-new mar margin-top-left padding-left-8 " />
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-success float-end icon-spacing margin-top-left" />
                                </li>
                            </div>
                    ))
                }   
                </ul>
            </div>
        </div>
  );
}

export default ModuleList;
