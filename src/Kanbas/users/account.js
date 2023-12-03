import * as client from "./client.js";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    try {
      const response = await client.account();
      setAccount(response);
    } catch (error) {
      console.error('Error fetching account:', error);
      navigate('/signin');
    }
  };

  const save = async () => {
    await client.updateUser(account);
  };


  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <h1 className="text-center mb-4">Account</h1>
        {account && (
          <form>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" value={account.password}
                onChange={(e) => setAccount({ ...account, password: e.target.value })}/>
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" id="firstName" className="form-control" value={account.firstName}
                onChange={(e) => setAccount({ ...account, firstName: e.target.value })}/>
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" id="lastName" className="form-control" value={account.lastName}
                onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date" id="dob" className="form-control" value={account.dob}
                onChange={(e) => setAccount({ ...account, dob: e.target.value })}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" value={account.email}
                onChange={(e) => setAccount({ ...account, email: e.target.value })}/>
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select id="role" className="form-select" value={account.role}
                onChange={(e) => setAccount({ ...account, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
            <div>
              <br />
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/project/admin/users" className="btn" style={{ backgroundColor: "#FFA700", color: "white" }}>
                Users
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Account;
