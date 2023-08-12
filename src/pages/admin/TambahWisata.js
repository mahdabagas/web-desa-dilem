import { useState } from "react";
import FormAdminWisata from "../../components/FormAdminWisata";
import { url } from "../../api/url";

const TambahWisata = () => {
  const valueDetail = {
    nama: "",
    harga_tiket: 0,
    alamat: "",
    kontak: "",
    gambar: "",
    jam_buka: "",
    jam_tutup: "",
    deskripsi: "",
  };

  const [detail, setDetail] = useState(valueDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const createWisata = async (e) => {
    e.preventDefault();

    let imagefile = document.querySelector("#gambar");

    const formData = new FormData();

    formData.append("gambar", imagefile.files[0]);
    formData.append("nama", detail.nama);
    formData.append("alamat", detail.alamat);
    formData.append("kontak", detail.kontak);
    formData.append("harga_tiket", detail.harga_tiket);
    formData.append("jam_buka", detail.jam_buka);
    formData.append("jam_tutup", detail.jam_tutup);
    formData.append("deskripsi", detail.deskripsi);

    const token = localStorage.getItem("Authorization");

    try {
      const req = await url.post("/wisata", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(req);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormAdminWisata
        detail={detail}
        handleChange={handleChange}
        handleSubmit={createWisata}
      />
    </>
  );
};

export default TambahWisata;
