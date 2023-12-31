import {Routes, Route } from "react-router-dom";
import Table_page from "../components/table_page";
import News from "../components/news";
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/table" element={<Table_page/>} />
            <Route path="/" element={<News/>} />
        </Routes>
    );
}