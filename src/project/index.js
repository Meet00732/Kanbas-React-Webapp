import Signin from "../Kanbas/users/signin";
import Account from "../Kanbas/users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Kanbas/users/Navbar";
import UserTable from "../Kanbas/users/table";
import Signup from "../Kanbas/users/signup";

import Nav from "../Nav";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
        <Navbar/>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
