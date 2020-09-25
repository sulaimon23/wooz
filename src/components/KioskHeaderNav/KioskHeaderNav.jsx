import React from 'react';
// import { Link } from "react-router-dom";
import { useHistory, Link } from 'react-router-dom';
import './KioskHeaderNav.css';
// import history from "../../history";

const KioskHeaderNav = ({ title }) => {
    const back = () => {
        history.goBack();
    };
    let history = useHistory();

    const forward = () => {
        history.goForward();
    };
    return (
        <React.Fragment>
            <div className="header-pointer">
                <div className="header-pointer__navigator">
                    <a
                        href="#"
                        aria-label="back button"
                        className="navigator-icon"
                        onClick={back}>
                        <span className="fas fa-arrow-left"></span>
                    </a>
                    <a
                        href="#"
                        aria-label="forward button"
                        className="navigator-icon"
                        onClick={forward}>
                        <span className="fas fa-arrow-right"></span>
                    </a>
                    <Link
                        to="/"
                        aria-label="Home button"
                        className="navigator-home navigator-icon">
                        <span className="fas fa-home"></span>
                    </Link>
                </div>
                <div className="navigator-page">
                    <span>{title}</span>
                </div>
                <div className="navigator-setting">
                    <a
                        href="#"
                        aria-label="Settings button"
                        className="navigator-setting">
                        <span className="fas fa-cog"></span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default KioskHeaderNav;
