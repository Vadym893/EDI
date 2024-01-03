import React from "react";
import Header from "./header";
import { LineChart } from "@mui/x-charts";
export default function Playergraph(){
    const xLabels = [];
    const uData = [];
    let i=0;
    while (uData.length <59){
        if (i<=20){
        xLabels.push(`${10+i} Nov`)
        }else if(i<=51){
            xLabels.push(`${i-20} Dec`)
        }else{
            xLabels.push(`${i-51} Jan`)
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
                            { data: uData, label: 'peak of players every day' }
                        ]}
                        xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                </div>
                <div className="statistic_holder"></div>
                <table className="money_table">
                    <thead>
                        <tr>
                            <th className="money_graph"> Day</th>
                            <th className="money_graph">Amount of players</th>
                            <th className="money_graph">Gain</th>
                            <th className="money_graph">%Gain</th>
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