import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UMKM from "./pages/UMKM";
import Pariwisata from "./pages/Pariwisata";
import Informasi from "./pages/Informasi";
import DetailInformasi from "./pages/DetailInformasi";
import DetailUMKM from "./pages/DetailUMKM";
import DetailWisata from "./pages/DetailWisata";
import ScrollToTop from "./components/ScrollToTop";
import Admin from "./pages/admin/Admin";
import AdminDesa from "./pages/admin/AdminDesa";
import AdminUmkm from "./pages/admin/AdminUmkm";
import AdminWisata from "./pages/admin/AdminWisata";
import AdminInformasi from "./pages/admin/AdminInformasi";
import UpdateUmkm from "./pages/admin/UpdateUmkm";
import UpdateInformasi from "./pages/admin/UpdateInformasi";
import UpdateWisata from "./pages/admin/UpdateWisata";
import TambahInformasi from "./pages/admin/TambahInformasi";
import TambahUmkm from "./pages/admin/TambahUmkm";
import TambahWisata from "./pages/admin/TambahWisata";
import Login from "./pages/Login";
import AdminRoutes from "./utils/AdminRoutes";
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
        <Route path="/masuk" element={<Login />} />

        {/* Admin Route*/}
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminDesa />} />
            <Route path="informasi" element={<AdminInformasi />} />
            <Route path="informasi/:id" element={<UpdateInformasi />} />
            <Route path="informasi/tambah" element={<TambahInformasi />} />
            <Route path="umkm" element={<AdminUmkm />} />
            <Route path="umkm/:id" element={<UpdateUmkm />} />
            <Route path="umkm/tambah" element={<TambahUmkm />} />
            <Route path="wisata" element={<AdminWisata />} />
            <Route path="wisata/:id" element={<UpdateWisata />} />
            <Route path="wisata/tambah" element={<TambahWisata />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
