import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import LanguageSelector from "./LanguageSelector";
export default function Header(){
    const {t}=useTranslation();
    return(
        <>
            <header className="header">
                <div className="header-content">
                    <Link to="/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2106670/header.jpg?t=1699769123" width="200" height="50" alt="icon"/></Link>
                    <Link to="/table" className="header-content-text" >{t("Ranking")}</Link>
                    <a href="javascript:void(0);"  className="header-content-text main-item">{t("CHARTS")}<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/nav/arrow.png" alt="triangle"/></a>
                    <div className="sub-menu">
                        <div className="sub-menu-box-1">    
                            <Link to="/money_chart" className="menu-box-1-text">{t("Spent Money")}</Link>
                            <Link to="/player_chart" className="menu-box-1-text">{t("Players online")}</Link>
                        </div>
                    </div>
                </div>
                <div className="header-sign">
                    <a href="https://store.steampowered.com/login/" className="header-sign-up">{t("Login")}</a>
                    <a href="#" className="header-language">{t("Language")+":  "}
                        <LanguageSelector/>
                    </a>
                    <a href="https://store.steampowered.com/app/2106670/Gatekeeper/" className="header-button">{t("Play for free")}</a>
                </div>
            </header>
        </>
    )
}