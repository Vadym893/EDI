import React,{useState,useEffect} from "react";
import Header from "./header";
import { useTranslation } from "react-i18next";
import Body from "./news_body";
const  News=()=>{
    const {t}=useTranslation()
    const [currentPage,setCurrentPage]=useState("news")
    const[userChoice,setuserChoice]=useState()

    useEffect(()=>{
        console.log(currentPage)
        if (currentPage==="news"){
            setuserChoice("news")
            
        }
        else if (currentPage==="update"){
            setuserChoice("update")
        }
    },[currentPage])
    return(
        <>
            <Header/>
            <div className="container">
                <main className="main">
                    <div className="main__top">
                        <p className="main__top-data">15th December 2023</p>
                        <p className="main__top-news">{t("The Frostivus 2023 Update is Here!")}</p>
                        <a href="#" className="main__top-link">{t("Read more")} <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_left.png" alt="arrow" className="top-link-img"/></a>
                    </div>
                    <div className="main__bottom">
                        <div className="link-wrapper">
                            <a  className="main__bottom-link" onClick={()=>{setCurrentPage("news")}}>{t("News")}</a>
                            <a  className="main__bottom-link" onClick={()=>{setCurrentPage("update")}}>{t("Updates")}</a>
                        </div>
                        <Body value={userChoice}/>
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer-list">
                        <p className="footer-list-title">Main Developers</p>
                        <p className="footer-list-item">Vadym Pasechnik</p>
                        <p className="footer-list-item">Volodymyr Polianskyi</p>
                        <p className="footer-list-item">Maksym Pyvovarov</p>
                    </div>
                    <p className="copyright">© All rights reserved</p>
                </footer>
            </div>
        </>
    )
}
export default News