import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../api/url";
import FormAdminInformasi from "../../components/FormAdminInformasi";

const UpdateInformasi = () => {
  const kodeParams = useRef();
  kodeParams.current = useParams();

  const valueDetail = {
    gambar: "",
    tentang_desa: "",
    tanggal: "",
    deskripsi: "",
  };

  const [detail, setDetail] = useState(valueDetail);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data } = await url.get(
          `info-kegiatan/${kodeParams.current.id}`
        );
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

  const updateInformasi = async (e) => {
    e.preventDefault();

    let imagefile = document.querySelector("#gambar");

    const formData = new FormData();

    formData.append("gambar", imagefile.files[0]);
    formData.append("judul", detail.tentang_desa);
    formData.append("tanggal", detail.tanggal);
    formData.append("deskripsi", detail.deskripsi);

    const token = localStorage.getItem("Authorization");

    try {
      const req = await url.patch(`info-kegiatan/${kodeParams.current.id}`, formData, {
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
      <FormAdminInformasi detail={detail} handleChange={handleChange} handleSubmit={updateInformasi}/>
    </>
  );
};

export default UpdateInformasi;
