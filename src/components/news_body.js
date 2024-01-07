import React from "react";
import { useTranslation } from "react-i18next";
const Body=({value})=>{
    const {t}=useTranslation()
    if (value==="news"){
        return(
            <>
                <div className="content1">
                    <div className="bottom-content">
                        <p className="bottom-content-data">14th December 2023</p>
                        <p className="bottom-content-title">{t("The Dark Night Before Frostivus")}</p>
                    </div>
                    <p className="bottom-text">{t("Another Frostivus is upon us, and that means King Kringle has awakened from his hibernation under the wine-dark Blood Seas surrounding Frostivus Castle; sent his legions of...")}</p>
                </div>
                <div className="content2">
                    <div className="bottom-content">
                        <p className="bottom-content-data">15th December 2023</p>
                        <p className="bottom-content-title">{t("The Frostivus 2023 Update is Here!")}</p>
                    </div>
                    <p className="bottom-text">{t("'Twas Frostivus Eve, and all 'cross the map, The neutrals were quiet, their camps left unstacked. We'd gorged on a feast of bluehorn and spiced creep, And had just settled in for...")}</p>
                </div>
                <div className="content3">
                    <div className="bottom-content">
                        <p className="bottom-content-data">21st November 2023</p>
                        <p className="bottom-content-title">{t("Gameplay Update 7.34e and What’s Up Next")}</p>
                    </div>
                    <p className="bottom-text">{t("After nearly a year of coordination and production, the multi-week, arena-sized monster that is The International 2023 has come to an exciting close.")}</p>
                </div>
                <div className="content4">
                    <div className="bottom-content">
                        <p className="bottom-content-data">1st November 2023</p>
                        <p className="bottom-content-title">{t("The International Grand Champions")}</p>
                    </div>
                    <p className="bottom-text">{t("Congratulations to Team Spirit, Grand Champions at The International 2023 and just the second team ever to claim the Aegis twice.")}</p>
                </div>
                <div className="content5">
                    <div className="bottom-content">
                        <p className="bottom-content-data">27th October 2023</p>
                        <p className="bottom-content-title">{t("The International Is Here")}</p>
                    </div>
                    <p className="bottom-text">{t("A truly epic Playoffs weekend has come to a close, and eight teams have clawed their way to a coveted spot at the main event: Team Spirit, Team Liquid, LGD Gaming and Azure Ray in...")}</p>
                </div>
                <div className="content6">
                    <div className="bottom-content">
                        <p className="bottom-content-data">20th October 2023</p>
                        <p className="bottom-content-title">{t("Get Ready for Playoffs Weekend")}</p>
                    </div>
                    <p className="bottom-text">{t("Twenty teams entered Group Stage weekend. And now, four intense days, four eliminations, 57 godlike sprees, six rampages, 104 heroes picked, and 100 total matches later, eight...")}</p>
                </div>
            </>
        )
    }else if(value==="update"){
        return(
            <>
                <div class="square-container">
                    <h1 class="date">DECEMBER 21, 2023</h1>
                    <h2 class="update">{t("7.35b Gameplay Patch")}</h2>
                    <p class="changes">{t("Over the last few days we've also addressed several gameplay issues:")} </p>
                    <br/>
                    <ul class="list">
                        <li class="patch-list"> {t("Fixed tabbing through selections being in creation order, rather than reverse creation order")}<br/></li>
                        <li class="patch-list"> {t("Fixed the combat log not displaying instances of damage that occurred on the same frame from the same source to the same target")}<br/></li>
                        <li class="patch-list"> {t("Fixed Block of Cheese not entering cooldown when receiving damage")}<br/></li>
                        <li class="patch-list"> {t("Fixed Parasma going on cooldown when denying")}<br/></li>
                        <li class="patch-list"> {t("Fixed Granite Golem's Granite Aura not correctly adjusting health when removed")}<br/></li>
                        <li class="patch-list"> {t("Fixed Batrider's Sticky Napalm applying damage from Mage Slayer")}<br/></li>
                        <li class="patch-list"> {t("Fixed Centaur Warrunner keeping the Work Horse ability after selling Aghanim's Scepter")}<br/></li>
                        <li class="patch-list"> {t("Fixed Centaur Warrunner's Hitch A Ride ability being in the wrong slot if applying Aghanim's Blessing")}<br/></li>
                        <li class="patch-list"> {t("Fixed Medusa having any damage shield making Dagger items unmuteable")}<br/></li>
                        <li class="patch-list"> {t("Fixed Meepo's Earthbind talent not giving the intended 2.5s cooldown reduction")}<br/></li>
                        <li class="patch-list"> {t("Fixed Meepo levelling Divided We Stand on a clone not giving Meepo the correct stats")}<br/></li>
                        <li class="patch-list"> {t("Fixed Muerta's Dead Shot interrupting some movement abilities on units that are debuff immune")}<br/></li>
                        <li class="patch-list"> {t("Fixed enemies being able to see Slardar's Bash of the Deep modifier stack count changing when he's hidden in the Fog of War")}<br/></li>
                        <li class="patch-list"> {t("Fixed Storm Spirit's Attack Range when Overloaded talent not working correctly with Aghanim's Shard")}<br/></li>
                        <li class="patch-list"> {t("Fixed Vengeful Spirit's Nether Swap barrier not being refreshable")}<br/></li>
                        <li class="patch-list"> {t("Fixed Viper's break particles being shown incorrectly<")}<br/></li>
                        <li class="patch-list"> {t("Fixed Wraith King's Skeletons following invisible units")}<br/></li>
                        <li class="patch-list"> {t("Fixed inconsistencies in Spell Amplification/Damage tooltips")}<br/></li>
                    </ul>
                </div>
                <br/>
                <br/>
                <div class="square-container">
                    <h1 class="date">DECEMBER 18, 2023</h1>
                    <h2 class="update">{t("Update - 12/18/2023")}</h2>
                    <p class="changes">{t("Over the last few days we've also addressed several gameplay issues:")} </p>
                    <br/>
                    <ul class="list">
                        <li class="patch-list"> {t("Fixed Bloodstone Area of Effect bonus still active on passive abilities if it was dropped or sold")}<br/></li>
                        <li class="patch-list"> {t("Fixed Bloodthorn mana regen being 3.0 instead of 3.5 from the sum of its components")}<br/></li>
                        <li class="patch-list"> {t("Fixed Butterfly not counting hero's base attack speed for its bonuses")}<br/></li>
                        <li class="patch-list"> {t("Fixed Cleave not working on magical attacks (i.e. Revenant's Brooch)")}<br/></li>
                        <li class="patch-list"> {t("Fixed a rare server crash when toggling Doubloon")}<br/></li>
                        <li class="patch-list"> {t("Fixed Khanda not doing lethal damage correctly")}<br/></li>
                        <li class="patch-list"> {t("Fixed Khanda and Phylactery not sharing cooldowns")}<br/></li>
                        <li class="patch-list"> {t("Fixed Tree Throw, Toss, Snowball, Soul Assumption and Sticky Bomb not triggering Phylactery/Khanda")}<br/></li>
                        <li class="patch-list"> {t("Fixed incorrect interaction between Phylactery/Khanda and and Spectre's Spectral Dagger")}<br/></li>
                        <li class="patch-list"> {t("Fixed Phylactery/Khanda working on illusions")}<br/></li>
                        <li class="patch-list"> {t("Fixed Meteor Hammer incorrectly giving more Agility than Intelligence")}<br/></li>
                        <li class="patch-list"> {t("Fixed Parasma not granting 1.5 mana regen from its components")}<br/></li>
                        <li class="patch-list"> {t("Fixed Revenant's Brooch incorrectly giving true strike")}<br/></li>
                        <li class="patch-list"> {t("Fixed a server crash caused by interaction between Abaddon's Aphotic Shield expiring, Safety Bubble, and Blade Mail")}<br/></li>
                        <li class="patch-list"> {t("Fixed Arc Warden's Tempest Double not cloning Royal Jelly")}<br/></li>
                        <li class="patch-list"> {t("Fixed Dawnbreaker's Starbreaker sometimes not going in the targeted direction")}<br/></li>
                        <li class="patch-list"> {t("Fixed non-ranged units getting true strike benefits of Drow Ranger's Glacier")}<br/></li>
                    </ul>
                </div>
                <br/>
                <br/>
                <div class="square-container">
                    <h1 class="date">DECEMBER 15, 2023</h1>
                    <h2 class="update">{t("Update - 12/14/2023")}</h2>
                    <p class="changes">{t("We've fixed a number issues since the initial Frostivus release:")} </p>
                    <br/>
                    <ul class="list">
                        <li class="patch-list"> {t("Fixed an issue with client-side display of Royal Jelly's buff stats")}<br/></li>
                        <li class="patch-list"> {t("Fixed Safety Bubble having its shield reset to full when dropped and re-equipped")}<br/></li>
                        <li class="patch-list"> {t("Fixed Unwavering Condition not working properly")}<br/></li>
                        <li class="patch-list"> {t("Fixed some testing items being purchasable ingame")}<br/></li>
                        <li class="patch-list"> {t("Added Roshan's Banner to the Glossary")}<br/></li>
                        <li class="patch-list"> {t("Fixed King Kringle's Skeletons not having the correct hats!")}<br/></li>
                        <li class="patch-list"> {t("Fixed King Kringle's Skeletons' hoods and portraits")}<br/></li>
                        <li class="patch-list"> {t("Fixed King Kringle's Skeletons not showing as Frostivus-appropriate in some locales")}<br/></li>
                        <li class="patch-list"> {t("Fixed the particles for Roshan's Banner sometimes not being properly removed")}<br/></li>
                        <li class="patch-list"> {t("Improved the look of the Tower Range indicator based on player use and made the danger threshold vary based on player hero level")}<br/></li>
                        <li class="patch-list"> {t("Fixed various small issues with the 7.35 patchnotes")}<br/></li>
                        <li class="patch-list"> {t("Fixed an issue with the Vampiric Spirit spell icon for King Kringle")}<br/></li>
                        <li class="patch-list"> {t("Fixed Jingle Fist Immortal display on the treasure screen")}<br/></li>
                        <li class="patch-list"> {t("Fixed an issue with movie previews while the Frostivus carousel was cycling during the treasure opening animation")}<br/></li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Body