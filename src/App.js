
import './App.css';
import {  BrowserRouter as Router } from 'react-router-dom';
import { AllRoutes } from "./actions/routes";
function App() {
  return (
    <Router>
        <AllRoutes />
    </Router>
  );
}

export default App;
