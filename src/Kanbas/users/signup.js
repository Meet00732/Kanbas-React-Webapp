import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Signup</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={signup}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
