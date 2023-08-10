import { useState, useEffect } from "react";
import { url } from "../api/url";
import decoration from "../assets/decoration.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";

// gambar
import bgSecondary from "../assets/bg-cl-secondary.png";
import bgPrimary from "../assets/bg-cl-primary.png";

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
      <div
        className="w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgSecondary})` }}
      >
        <div className="w-5/6 mx-auto py-24 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[44px] text-primary">Pariwisata</h1>
          <img src={decoration} alt="decoration" className="w-80" />
        </div>
      </div>
      <section
        id="listWisata"
        className="w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgPrimary})` }}
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full grid grid-cols-3 gap-20">
            {pariwisata.map((value) => {
              return (
                <Link to={`/wisata/${value.id}`}>
                  <CardDetail
                    gambar={value.gambar}
                    judul={value.nama}
                    deskripsi={value.deskripsi}
                  />
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
