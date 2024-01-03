import React from "react";
import Header from "./header";
const  News=()=>{
    return(
        <>
            <Header/>
            <div className="container">
                <main className="main">
                    <div className="main__top">
                        <p className="main__top-data">15th December 2023</p>
                        <p className="main__top-news">The Frostivus 2023 Update is Here!</p>
                        <a href="#" className="main__top-link">Read more <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_left.png" alt="arrow" className="top-link-img"/></a>
                    </div>
                    <div className="main__bottom">
                        <div className="link-wrapper">
                            <a href="" className="main__bottom-link">News</a>
                            <a href="" className="main__bottom-link">Updates</a>
                        </div>
                        <div className="content1">
                            <div className="bottom-content">
                                <p className="bottom-content-data">14th December 2023</p>
                                <p className="bottom-content-title">The Dark Night Before Frostivus</p>
                            </div>
                            <p className="bottom-text">Another Frostivus is upon us, and that means King Kringle has awakened from his hibernation under the wine-dark Blood Seas surrounding Frostivus Castle; sent his legions of...</p>
                        </div>
                        <div className="content2">
                            <div className="bottom-content">
                                <p className="bottom-content-data">15th December 2023</p>
                                <p className="bottom-content-title">The Frostivus 2023 Update is Here!</p>
                            </div>
                            <p className="bottom-text">'Twas Frostivus Eve, and all 'cross the map, The neutrals were quiet, their camps left unstacked. We'd gorged on a feast of bluehorn and spiced creep, And had just settled in for...</p>
                        </div>
                        <div className="content3">
                            <div className="bottom-content">
                                <p className="bottom-content-data">21st November 2023</p>
                                <p className="bottom-content-title">Gameplay Update 7.34e and What’s Up Next</p>
                            </div>
                            <p className="bottom-text">After nearly a year of coordination and production, the multi-week, arena-sized monster that is The International 2023 has come to an exciting close.</p>
                        </div>
                        <div className="content4">
                            <div className="bottom-content">
                                <p className="bottom-content-data">1st November 2023</p>
                                <p className="bottom-content-title">The International Grand Champions</p>
                            </div>
                            <p className="bottom-text">Congratulations to Team Spirit, Grand Champions at The International 2023 and just the second team ever to claim the Aegis twice.</p>
                        </div>
                        <div className="content5">
                            <div className="bottom-content">
                                <p className="bottom-content-data">27th October 2023</p>
                                <p className="bottom-content-title">The International Is Here</p>
                            </div>
                            <p className="bottom-text">A truly epic Playoffs weekend has come to a close, and eight teams have clawed their way to a coveted spot at the main event: Team Spirit, Team Liquid, LGD Gaming and Azure Ray in...</p>
                        </div>
                        <div className="content6">
                            <div className="bottom-content">
                                <p className="bottom-content-data">20th October 2023</p>
                                <p className="bottom-content-title">Get Ready for Playoffs Weekend</p>
                            </div>
                            <p className="bottom-text">Twenty teams entered Group Stage weekend. And now, four intense days, four eliminations, 57 godlike sprees, six rampages, 104 heroes picked, and 100 total matches later, eight...</p>
                        </div>
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