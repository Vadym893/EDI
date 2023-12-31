import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header-content">
                    <Link to="/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2106670/header.jpg?t=1699769123" width="200" height="50" alt="icon"/></Link>
                    <Link to="/table" class="header-content-text" >Ranking</Link>
                    <a href="javascript:void(0);" tabindex="1" className="header-content-text main-item">Heropedia <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/nav/arrow.png" alt="triangle"/></a>
                    <div className="sub-menu">
                        <div className="sub-menu-box-1">    
                            <a href="https://www.dota2.com/heroes/" className="menu-box-1-text">Heroes</a>
                            <a href="https://www.dota2.com/workshop/builds/overview" className="menu-box-1-text">Builds</a>
                            <a href="https://steamcommunity.com/app/570/guides" className="menu-box-1-text">Steam Guides</a>
                            <a href="https://www.dota2.com/news/updates" className="menu-box-1-text">Gameplay Updates</a>
                        </div>
                    </div>
                </div>
                <div className="header-sign">
                    <a href="https://store.steampowered.com/login/" className="header-sign-up">Login</a>
                    <a href="#" class="header-language">Language <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/header/small_arrow.png" alt="tr2"/></a>
                    <a href="https://store.steampowered.com/app/2106670/Gatekeeper/" className="header-button">Play for free</a>
                </div>
            </header>
        </>
    )
}