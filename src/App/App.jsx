import React from "react";
import Main from "../Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import KratsiaAi from "../Pages/ProjectScreens/Kratsia-ai";
import Coder from "../Pages/ProjectScreens/Coder";
import PocketMosque from "../Pages/ProjectScreens/PocketMosque";
import Tranquiliti from "../Pages/ProjectScreens/Tranquiliti";
import Qup from "../Pages/ProjectScreens/Q-UP";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/KratsiaAi" element={<KratsiaAi />} />
      <Route path="/Coder" element={<Coder />} />
      <Route path="/PocketMosque" element={<PocketMosque />} />
      <Route path="/Tranquiliti" element={<Tranquiliti />} />
      <Route path="/Q-UP" element={<Qup />} />
    </Routes>
  );
}

export default App;
