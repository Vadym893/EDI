import {Routes, Route } from "react-router-dom";
import TablePages from "../components/table_page";
import News from "../components/news";
import MoneyChart from "../components/money_chart";
import Playergraph from "../components/player_chart";
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/table" element={<TablePages/>} />
            <Route path="/" element={<News/>} />
            <Route path="/money_chart" element={<MoneyChart/>}/>
            <Route path="/player_chart" element={<Playergraph/>}></Route>
        </Routes>
    );
}