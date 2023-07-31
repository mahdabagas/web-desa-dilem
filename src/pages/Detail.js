import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Detail = ({ judul, deskripsi, gambar, nama }) => {
  return (
    <>
      <Navbar />
      <section
        id="list UMKM"
        className="w-full min-h-screen bg-primary font-poppins"
      >
        <div className="w-full h-96">
          <img
            src={gambar}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="w-5/6 py-[120px] mx-auto">
          <h1>{nama}</h1>
          <h2>{alamat && `Alamat : ${alamat}`}</h2>
          <h2>{harga_tiket && `Harga Tiket : ${harga_tiket}`}</h2>
          <h2>{kontak && `Kontak : ${kontak}`}</h2>
          <h2>{jam_buka && `Alamat : ${alamat}`}</h2>
          <h2>{alamat && `Alamat : ${alamat}`}</h2>
          <h2>{alamat && `Alamat : ${alamat}`}</h2>
          <p>{deskripsi}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};
