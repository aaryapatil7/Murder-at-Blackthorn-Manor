import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CrimeScene from "./pages/CrimeScene";
import Suspects from "./pages/Suspects";
import Interrogation from "./pages/Interrogation";
import Accusation from "./pages/Accusation";
import EvidenceBoard from "./pages/EvidenceBoard";
import Navbar from "./components/Navbar";
import CaseFile from "./pages/CaseFile";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scene" element={<CrimeScene />} />
          <Route path="/suspects" element={<Suspects />} />
          <Route path="/interrogation/:id" element={<Interrogation />} />
          <Route path="/accusation" element={<Accusation />} />
          <Route path="/evidence" element={<EvidenceBoard />} />
          <Route path="/casefile" element={<CaseFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;