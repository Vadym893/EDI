import React from "react";
const Table = ({data}) => {
    return(
        <>
            <div className="div_table">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="first_column">Division<br/>Rank</th>
                            <th className="second_column">Player</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {data && data.map((element,i)=>{
                            return (
                                <tr key={`${element.sponsor + element.team_tag + element.player_name}/ ${i}`}>
                                    <td className="ranking">{i+1}</td>
                                    <td>{element.team_tag}.
                                    <span className="element_name">{element.player_name}.</span>
                                    {element.sponsor}
                                        <img src={`https://www.flagpictures.com/static/flags/vector/${element.country}.svg`} className="flag_photo"/>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
//{"team_tag":"Liquid","player_name":"她","sponsor":"ProZone","country":"bt"}
export default Table