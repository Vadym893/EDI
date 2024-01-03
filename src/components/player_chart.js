import React from "react";
import Header from "./header";
import { LineChart } from "@mui/x-charts";
import { useTranslation } from 'react-i18next'
export default function Playergraph(){
    const {t}=useTranslation()
    const xLabels = [];
    const uData = [];
    let i=0;
    while (uData.length <59){
        if (i<=20){
        xLabels.push(`${(10+i<10)?(`0${10+i}`):(10+i)}.11.2023`)
        }else if(i<=51){
            xLabels.push(`${(i-20<10)?(`0${i-20}`):(i-20)}.12.2023`)
        }else{
            xLabels.push(`${(i-51<10)?(`0${i-51}`):(i-51)}.01.2024`)
        }
        let random_num=Math.floor(Math.random() * (10000 - 1200)) + 1200
        if (random_num!==0){
            uData.push(random_num)
        }
        i++

    }
   
    console.log(uData,xLabels)
    return(
        <>
            <Header/>
            <div className="money_container">
                <div className="chart_container">
                    <LineChart
                        series={[
                            { data: uData, label: `${t("peak of players every day")}` }
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </div>
                <div className="statistic_holder"></div>
                <table className="money_table">
                    <thead>
                        <tr>
                            <th className="money_graph"> {t("Day")}</th>
                            <th className="money_graph">{t("Amount of players")}</th>
                            <th className="money_graph">{t("Gain")}</th>
                            <th className="money_graph">{t("%Gain")}</th>
                        </tr>
                    </thead>
                    <tbody id="body">
                    {uData && xLabels && uData.map((element,i)=>{
                        let td=document.getElementsByClassName("change_money")
                        if (uData[uData.length-i-1]-uData[uData.length-i-2]<0){
                            td.style={color:"red"}
                        }else{
                            td.style={color:"green"}
                        }
                            return (
                                <tr key={`${element}/ ${i}`}>
                                    <td >{xLabels[uData.length-i-1]}</td>
                                    <td>{uData[uData.length-i-1]}</td>
                                    <td><span className="change_money"style={((uData[uData.length-i-1]>=uData[uData.length-i-2]))?{color:"green"}:{color:"red"}}>{(i!==58)?(uData[uData.length-i-1]-uData[uData.length-i-2]>0)?`+${uData[uData.length-i-1]-uData[uData.length-i-2]}`:uData[uData.length-i-1]-uData[uData.length-i-2]:""}</span></td>
                                    <td><span style={(((uData[uData.length-i-1]/uData[uData.length-i-2])-1)>=0)?{color:"green"}:{color:"red"}}>{(i!==58)?(((uData[uData.length-i-1]/uData[uData.length-i-2])-1)>0)?`+${(((uData[uData.length-i-1]/uData[uData.length-i-2])-1)*100).toFixed(1)}%`:`${(((uData[uData.length-i-1]/uData[uData.length-i-2])-1)*100).toFixed(1)}%`:""}</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            <div/>
            </div>
        </>
    )
}