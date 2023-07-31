import { useState, useEffect } from "react";
import { url } from "../api/url";
import decoration from "../assets/decoration.png";
import Navbar from "../components/Navbar";
import CardUMKM from "../components/CardUMKM";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";

const Pariwisata = () => {
  // get umkm
  const [pariwisata, setPariwisata] = useState([]);
  useEffect(() => {
    const getPariwisata = async () => {
      try {
        const { data } = await url.get("/wisata");
        setPariwisata(data.data);
        console.log(pariwisata);
      } catch (err) {
        console.log(err);
      }
    };
    getPariwisata();
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="w-full bg-secondary">
        <div className="w-5/6 mx-auto pt-[160px] pb-24 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[44px] text-primary">Pariwisata</h1>
          <img src={decoration} alt="decoration" className="w-80" />
        </div>
      </div>
      <section
        id="list UMKM"
        className="w-full min-h-screen bg-primary font-poppins"
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full grid grid-cols-3 gap-20">
            {pariwisata.map((value) => {
              return (
                <Link to={`/wisata/${value.id}`}>
                  <CardDetail gambar={value.gambar} judul={value.nama} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pariwisata;
