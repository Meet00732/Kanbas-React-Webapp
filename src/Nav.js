import { Link, NavLink, useLocation } from "react-router-dom";
import './nav.css';

function Nav() {
    const {pathname} = useLocation();
    return (
        <nav className="nav nav-tabs mt-2 set">
            <NavLink className={`nav-link ${pathname.includes("a5") ? "active" : ""}`} to="/Labs/a5">A5</NavLink>
            <NavLink className={`nav-link ${pathname.includes("a4") ? "active" : ""}`} to="/Labs/a4">A4</NavLink>
            <NavLink className={`nav-link ${pathname.includes("a3") ? "active" : ""}`} to="/Labs/a3"> A3 </NavLink>
            <NavLink className={`nav-link ${pathname.includes("hello") ? "active" : ""}`} to="/hello"> Hello </NavLink>
            <NavLink className={`nav-link ${pathname.includes("kanbas") ? "active" : ""}`} to="/Kanbas"> Kanbas</NavLink>
            <NavLink className={`nav-link ${pathname.includes("project") ? "active" : ""}`} to="/project"> Project</NavLink>
            
        </nav>
    )
}

export default Nav;