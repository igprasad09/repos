import Home from "./components/ui/Home";
import Username from "./components/ui/Username";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <Routes>
           <Route element={<Username/>} path='/'/>
           <Route element={<Home/>} path="/home"/>
       </Routes>
    </>
  );
}

export default App;
