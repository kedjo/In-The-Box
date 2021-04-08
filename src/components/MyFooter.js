import React from 'react';
import { FaTwitch, FaGithub, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

export const MyFooter = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className="footer">
                <a className="icons icons-github" href="https://github.com/kedjo"><FaGithub/></a>
                <a className="icons icons-mail" href="mailto: daoguang1063@gmail.com"><HiOutlineMail /></a>
                <a className="icons icons-twitch" href="https://www.twitch.tv/kedjo1063"><FaTwitch /></a>
                <a className="icons icons-youtube" href="https://www.youtube.com/channel/UCjAUslBKDxXJymV4jLYeYoA/featured"><FaYoutube /> </a>    
                <p>Released under the <a href="https://opensource.org/licenses/MIT">MIT Licence</a></p>
                <p>Copyright © 2021-2021 Kedjo</p>
            </div>
        </IconContext.Provider>
    )
}
