import { useState } from "react";
import FormAdminUmkm from "../../components/FormAdminUmkm";
import { url } from "../../api/url";

const TambahUmkm = () => {
  const valueDetail = {
    gambar: "",
    nama: "",
    alamat: "",
    kontak: "",
    deskripsi: "",
  };

  const [detail, setDetail] = useState(valueDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const createUmkm = async (e) => {
    e.preventDefault();

    let imagefile = document.querySelector("#gambar");

    const formData = new FormData();

    formData.append("gambar", imagefile.files[0]);
    formData.append("nama", detail.nama);
    formData.append("alamat", detail.alamat);
    formData.append("kontak", detail.kontak);
    formData.append("deskripsi", detail.deskripsi);

    const token = localStorage.getItem("Authorization");

    try {
      const req = await url.post("/umkm", formData, {
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
      <FormAdminUmkm detail={detail} handleChange={handleChange} handleSubmit={createUmkm}/>
    </>
  );
};

export default TambahUmkm;
