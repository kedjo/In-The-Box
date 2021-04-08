import React from 'react';
import { GiSpaceship, GiFrance, GiUsaFlag } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { IconContext } from "react-icons";

export const NavNews = () => {
    return (
        <div className="nav-news">
            <IconContext.Provider value={{ className: 'react-icons news-icons'}}>
                <a href="#news-apod" className="icons">
                    <GiSpaceship className="toHover icons-space"/>
                    <span className="hide">APOD</span>
                </a>
                <a href="#news-fr" className="icons">
                    <GiFrance className="toHover icons-fr"/>
                    <span className="hide">France</span>
                </a>
                <a href="#news-us" className="icons">
                    <GiUsaFlag className="toHover icons-usa"/>
                    <span className="hide">USA</span>
                </a>
                <a href="/" className="icons">
                    <FaBoxOpen className="toHover icons-home"/>
                    <span className="hide">Box</span>
                </a>
            </IconContext.Provider>
        </div>
    )
}
