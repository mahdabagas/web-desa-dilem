import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../api/url";
import FormAdminUmkm from "../../components/FormAdminUmkm";

const UpdateUmkm = () => {
  const kodeParams = useRef();
  kodeParams.current = useParams();

  const valueDetail = {
    gambar: "",
    nama: "",
    alamat: "",
    kontak: "",
    deskripsi: "",
  };

  const [detail, setDetail] = useState(valueDetail);

  useEffect(() => {
    console.log(kodeParams.current);
    const getDetail = async () => {
      try {
        const { data } = await url.get(`umkm/${kodeParams.current.id}`);
        setDetail(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetail();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const updateUmkm = async (e) => {
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
      const req = await url.patch(`umkm/${kodeParams.current.id}`, formData, {
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
      <FormAdminUmkm detail={detail} handleChange={handleChange} handleSubmit={updateUmkm} />
    </>
  );
};

export default UpdateUmkm;
