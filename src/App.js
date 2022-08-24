import "./App.css";
import Dashboard from "../src/pages/Dashboard";
import {Routes , Route} from "react-router-dom";
import Shudy from "./pages/Shudy";

function App() {
  return (
    <Routes>    
         <Route path="/" element={<Dashboard/>} />
         <Route path="/shudy" element={<Shudy/>} />
    </Routes>
  );
}

export default App;
