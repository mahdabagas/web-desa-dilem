import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UMKM from "./pages/UMKM";
import Pariwisata from "./pages/Pariwisata";
import Informasi from "./pages/Informasi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/informasi" element={<Informasi />} />
      <Route path="/informasi/:id" element={<Informasi />} />
      <Route path="/umkm" element={<UMKM />} />
      <Route path="/umkm/:id" element={<UMKM />} />
      <Route path="/wisata" element={<Pariwisata />} />
      <Route path="/wisata/:id" element={<Pariwisata />} />
    </Routes>
  );
}

export default App;
