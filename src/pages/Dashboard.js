import { useState, useEffect } from "react";
import { url } from "../api/url";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Gambar
import hero from "../assets/hero.png";
import about from "../assets/about.png";
import visiMisi from "../assets/visi misi.png";
import CardInformasi from "../components/CardInformasi";
import CardUMKM from "../components/CardUMKM";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // get info desa
  const [desa, setDesa] = useState({});
  useEffect(() => {
    const getDataDesa = async () => {
      try {
        const { data } = await url.get("/desa");
        setDesa(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDataDesa();
  }, []);

  // set open visi or misi
  const [openVisi, setOpenVisi] = useState(true);

  // get info kegiatan
  const [kegiatan, setKegiatan] = useState([]);
  useEffect(() => {
    const getKegiatan = async () => {
      try {
        const { data } = await url.get("/info-kegiatan");
        setKegiatan(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getKegiatan();
  }, []);

  // get umkm
  const [umkm, setUmkm] = useState([]);
  useEffect(() => {
    const getUmkm = async () => {
      try {
        const { data } = await url.get("/umkm");
        setUmkm(data.data);
        console.log(umkm);
      } catch (err) {
        console.log(err);
      }
    };
    getUmkm();
  }, []);

  // get Wisata
  const [wisata, setWisata] = useState([]);
  useEffect(() => {
    const getWisata = async () => {
      try {
        const { data } = await url.get("/wisata");
        setWisata(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWisata();
  }, []);

  return (
    <>
      <Navbar />
      {/* Awal Hero Section */}
      <section
        id="hero"
        className="w-full h-screen bg-cover bg-center font-poppins"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="w-5/6 mx-auto h-full flex items-center">
          <div className="text-white">
            <h1 className="text-[44px]">Selamat Datang</h1>
            <h2 className="text-[52px]">
              Desa Dilem, Kepanjen <br />
              Jawa Timur
            </h2>
            <button className="py-4 px-14 rounded-[100px] bg-accent text-3xl">
              Mulai
            </button>
          </div>
        </div>
      </section>
      {/* Akhir Hero Section */}
      {/* Awal About Section */}
      <section
        id="about"
        className="w-full bg-secondary min-h-screen font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="text-center text-[44px] mb-20">
            <h1 className="font-semibold">Tentang</h1>
            <h1>Desa Dilem</h1>
          </div>
          <div className="flex justify-between gap-44 ">
            <p className="w-3/5 text-xl">{desa.tentang_desa}</p>
            <div className="w-2/5 h-full">
              <img
                src={about}
                alt="about"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Akhir About Section */}
      {/* Awal Visi Misi Section */}
      <section
        id="visiMisi"
        className="w-full bg-primary min-h-screen font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full flex justify-between gap-44">
            <div className="w-3/5">
              <h1 className="text-[44px] text-accent font-semibold mb-6">
                Visi dan Misi Desa Dilem
              </h1>
              <div className="rounded-[60px] bg-secondary flex justify-around relative overflow-hidden mb-6 text-2xl font-medium">
                <h2
                  className={`${
                    openVisi
                      ? " bg-accent text-white rounded-[60px]"
                      : "bg-secondary text-primary"
                  } w-1/2 text-center py-2`}
                  onClick={() => setOpenVisi(true)}
                >
                  Visi
                </h2>
                <h2
                  className={`${
                    !openVisi
                      ? " bg-accent text-white rounded-[60px]"
                      : "bg-secondary text-primary"
                  } w-1/2  text-center py-2`}
                  onClick={() => setOpenVisi(false)}
                >
                  Misi
                </h2>
              </div>
              <div>
                <p className="font-medium text-2xl text-white">
                  {openVisi ? desa.visi : desa.misi}
                </p>
              </div>
            </div>
            <div className="w-2/5 h-full">
              <img
                src={visiMisi}
                alt="about"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Visi Misi Section */}
      {/* Awal Informasi */}
      <section
        id="informasi"
        className="w-full bg-secondary min-h-screen font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full text-primary mb-10">
            <h1 className="text-[44px] font-semibold text-center">Informasi</h1>
            <h2 className="text-2xl text-center">
              Dapatkan Informasi update seputar Kegiatan Desa Dilem disini.
            </h2>
          </div>
          <div className="w-full grid grid-cols-3 gap-8 py-10">
            {kegiatan.map((value) => {
              return (
                <div>
                  <Link to={`informasi/${value.ID}`}>
                    <CardInformasi data={value} />
                  </Link>
                </div>
              );
            })}
          </div>
          <Link to="/informasi" className="w-full flex justify-center">
            <p className="bg-accent p-2 rounded-lg text-white">
              Informasi Lainnya
            </p>
          </Link>
        </div>
      </section>
      {/* Akhir Informasi */}
      {/* Awal UMKM */}
      <section
        id="informasi"
        className="w-full bg-primary min-h-screen font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full text-secondary mb-10">
            <h1 className="text-[44px] font-semibold ">UMKM</h1>
            <h2 className="text-[44px] font-medium">Desa Dilem</h2>
          </div>
          <div className="w-full grid grid-cols-4 gap-10 py-10">
            {umkm.map((value) => {
              return (
                <Link to={`/umkm/${value.id}`}>
                  <CardUMKM data={value} />
                </Link>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-accent p-2 rounded-lg text-white">
              UMKM Lainnya
            </button>
          </div>
        </div>
      </section>
      {/* Akhir UMKM */}
      {/* Awal Wisata */}
      <section
        id="wisata"
        className="w-full bg-secondary min-h-screen font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full text-primary mb-10">
            <h1 className="text-[44px] font-semibold ">Wisata</h1>
            <h2 className="text-[44px] font-medium">Desa Dilem</h2>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {wisata.map((value) => {
              return (
                <div>
                  <Link to={`/wisata/${value.id}`}>
                    <div className="max-w-3xl mx-auto rounded-[20px] overflow-hidden mb-4">
                      <div className="w-full h-80">
                        <img
                          src={value.gambar}
                          alt="card_1"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="bg-primary text-center py-4 text-2xl text-white ">
                        <h5>{value.nama}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-accent p-2 rounded-lg text-white">
              List Wisata
            </button>
          </div>
        </div>
      </section>
      {/* Akhir Wisata */}
      <Footer />
    </>
  );
};

export default Dashboard;
