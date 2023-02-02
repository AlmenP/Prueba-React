import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./harry-potter-logo.png";
import "./MiApi.css";

const Header = (props) => {

    return (
        <div>
        <div className="foto">
            <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></div>
        <h1 className="tituloheader">{props.title}</h1>
        </div>
    );
};

export default Header;