import { useState, useEffect } from "react";
import { url } from "../api/url";
import decoration from "../assets/decoration.png";
import Navbar from "../components/Navbar";
import CardUMKM from "../components/CardUMKM";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";

const UMKM = () => {
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
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="w-full bg-secondary">
        <div className="w-5/6 mx-auto pt-[160px] pb-24 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[44px] text-primary">UMKM</h1>
          <img src={decoration} alt="decoration" className="w-80" />
        </div>
      </div>
      <section
        id="list UMKM"
        className="w-full min-h-screen bg-primary font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full grid grid-cols-3 gap-20">
            {umkm.map((value) => {
              return <CardDetail gambar={value.gambar} judul={value.nama} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UMKM;
