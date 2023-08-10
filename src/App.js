import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UMKM from "./pages/UMKM";
import Pariwisata from "./pages/Pariwisata";
import Informasi from "./pages/Informasi";
import DetailInformasi from "./pages/DetailInformasi";
import DetailUMKM from "./pages/DetailUMKM";
import DetailWisata from "./pages/DetailWisata";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/informasi/:id" element={<DetailInformasi />} />
        <Route path="/umkm" element={<UMKM />} />
        <Route path="/umkm/:id" element={<DetailUMKM />} />
        <Route path="/wisata" element={<Pariwisata />} />
        <Route path="/wisata/:id" element={<DetailWisata />} />
      </Routes>
    </>
  );
}

export default App;
