import { useState } from "react";
import FormAdminInformasi from "../../components/FormAdminInformasi";
import { url } from "../../api/url";

const TambahInformasi = () => {
  const valueDetail = {
    gambar: "",
    tentang_desa: "",
    tanggal: "",
    deskripsi: "",
  };
  const [detail, setDetail] = useState(valueDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const createInformasi = async (e) => {
    e.preventDefault();

    let imagefile = document.querySelector("#gambar");

    const formData = new FormData();

    formData.append("gambar", imagefile.files[0]);
    formData.append("judul", detail.tentang_desa);
    formData.append("tanggal", detail.tanggal);
    formData.append("deskripsi", detail.deskripsi);

    const token = localStorage.getItem("Authorization");

    try {
      const req = await url.post("/info-kegiatan", formData, {
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
      <FormAdminInformasi
        detail={detail}
        handleChange={handleChange}
        handleSubmit={createInformasi}
      />
    </>
  );
};

export default TambahInformasi;
