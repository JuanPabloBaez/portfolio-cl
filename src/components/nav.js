import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav-bar">    
            <Link to="/" className="logo">CARLOS LÉRTORA SÁEZ</Link>
            <div className="link-panel">
                <Link to="/documental">DOCUMENTAL & VIDEO </Link>/
                <Link to="/imagen">IMAGEN </Link>/
                <Link to="/sonido">SONIDO </Link>
            </div>
        </div>
    )
}

export default Nav;