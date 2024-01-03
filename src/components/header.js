import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header-content">
                    <Link to="/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2106670/header.jpg?t=1699769123" width="200" height="50" alt="icon"/></Link>
                    <Link to="/table" className="header-content-text" >Ranking</Link>
                    <a href="javascript:void(0);"  className="header-content-text main-item">Charts <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/nav/arrow.png" alt="triangle"/></a>
                    <div className="sub-menu">
                        <div className="sub-menu-box-1">    
                            <Link to="/money_chart" className="menu-box-1-text">Spent Money</Link>
                            <Link to="/player_chart" className="menu-box-1-text">Players online</Link>
                        </div>
                    </div>
                </div>
                <div className="header-sign">
                    <a href="https://store.steampowered.com/login/" className="header-sign-up">Login</a>
                    <a href="#" className="header-language">Language <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/header/small_arrow.png" alt="tr2"/></a>
                    <a href="https://store.steampowered.com/app/2106670/Gatekeeper/" className="header-button">Play for free</a>
                </div>
            </header>
        </>
    )
}