import React, { useState, useEffect } from "react";
import * as client from "./client";
import {BsFillCheckCircleFill, BsPencil, BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "USER" });

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const fetchUsers = async () => {
    try {
      const users = await client.findAllUsers();
      console.log(users);
      setUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const selectUser = async (user) => {
    try {
        console.log(user._id);
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => { 
    fetchUsers(); 
  }, []);

  return (
      <div className="row">
        <div className="col-lg-12 col-md-8">
          <h1 className="text-center mb-4">User List</h1>
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                    <Link to={`/project/account/${user._id}`}>
                      <input type="text" className="form-control" value={user.username} placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                    </Link> 
                </td>
                <td>
                  <input type="password" className="form-control" value={user.password} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                </td>
                <td>
                  <input type="text" className="form-control" value={user.firstName} placeholder="First Name" onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                </td>
                <td>
                  <input type="text" className="form-control" value={user.lastName} placeholder="Last Name" onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                </td>
                <td>
                  <select className="form-select" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </td>
                <td>  
                <BsFillCheckCircleFill onClick={updateUser}
                      className="me-2 text-success fs-2 text" />    
                  <BsPlusCircleFill onClick={createUser} style={{ cursor: 'pointer' }}/>
                </td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td></td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => deleteUser(user)}>
                        <BsTrash3Fill />
                    </button>

                    <button className="btn btn-warning me-2">
                        <BsPencil onClick={() => selectUser(user)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default UserTable;
