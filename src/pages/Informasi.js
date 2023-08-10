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

const Informasi = () => {
  // get umkm
  const [informasi, setInformasi] = useState([]);

  useEffect(() => {
    const getInformasi = async () => {
      try {
        const { data } = await url.get("/info-kegiatan");
        setInformasi(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getInformasi();
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <div
        className="w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgSecondary})` }}
      >
        <div className="w-5/6 mx-auto py-24 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[44px] text-primary">Informasi</h1>
          <img src={decoration} alt="decoration" className="w-80" />
        </div>
      </div>
      <section
        id="listInformasi"
        className="w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bgPrimary})` }}
      >
        <div className="w-5/6 py-[120px] mx-auto">
          <div className="w-full grid grid-cols-3 gap-20">
            {informasi.map((value) => {
              return (
                <>
                  <Link to={`/informasi/${value.ID}`} preventScrollReset={true}>
                    <CardDetail
                      gambar={value.gambar}
                      judul={value.tentang_desa}
                      deskripsi={value.deskripsi}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Informasi;
