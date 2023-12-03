import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const navItems = [
        { label: "Home", path: "/home", word: "Home" },
        { label: "Search", path: "/search", word: "Search" },
        { label: "Sign In", path: "/project/signin", word: "Signin" },
        { label: "Sign Up", path: "/project/signup", word: "Signup" },
        { label: "Account", path: "/project/account", word: "Account" },
    ];

    const isCurrentPage = (word) => pathname === navItems.find(item => item.word === word).path;

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "190px", height: "100vh"}}>
            <nav className="nav nav-pills flex-column mb-auto">
                {navItems.map((item, index) => (
                    <Link key={index}
                          className={`nav-link ${isCurrentPage(item.word) ? "active" : ""}`}
                          aria-current={isCurrentPage(item.word) ? "page" : ""}
                          to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Nav;
