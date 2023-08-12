import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../api/url";
import Paginations from "../../components/Paginations";
import ButtonDelete from "../../components/ButtonDelete";
import CardDetail from "../../components/CardDetail";

const AdminInformasi = () => {
  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // get info kegiatan
  const [kegiatan, setKegiatan] = useState([]);
  const [refresh, setrefresh] = useState(false);
  useEffect(() => {
    const getKegiatan = async () => {
      try {
        const { data } = await url.get("/info-kegiatan");
        setKegiatan(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getKegiatan();
  }, [refresh]);

  // Delete handler
  const handleDelete = async (index) => {
    const token = localStorage.getItem("Authorization");
    try {
      const res = await url.delete(`/info-kegiatan/${index}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setrefresh(!refresh);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-secondary font-semibold text-4xl text-center mb-3">
            Informasi Kegiatan
          </h1>
          <Link to={"tambah"} className="flex gap-2 items-center ">
            <svg
              className="w-[30px] h-[30px] fill-secondary"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 1.875C11.532 1.91684 8.21789 3.31308 5.76549 5.76549C3.31308 8.21789 1.91684 11.532 1.875 15C1.91684 18.468 3.31308 21.7821 5.76549 24.2345C8.21789 26.6869 11.532 28.0832 15 28.125C18.468 28.0832 21.7821 26.6869 24.2345 24.2345C26.6869 21.7821 28.0832 18.468 28.125 15C28.0832 11.532 26.6869 8.21789 24.2345 5.76549C21.7821 3.31308 18.468 1.91684 15 1.875ZM22.5 15.9375H15.9375V22.5H14.0625V15.9375H7.5V14.0625H14.0625V7.5H15.9375V14.0625H22.5V15.9375Z" />
            </svg>
            <h2 className="font-semibold text-2l text-secondary">
              Tambah Kegiatan
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-0 mb-10">
          {kegiatan &&
            kegiatan
              .slice(firstPostIndex, lastPostIndex)
              .map((value) => (
                <div className="relative">
                  <span onClick={() => handleDelete(value.ID)}>
                    <ButtonDelete />
                  </span>
                  <Link to={`${value.ID}`}>
                    <CardDetail
                      gambar={value.gambar}
                      judul={value.tentang_desa}
                      deskripsi={value.deskripsi}
                    />
                  </Link>
                </div>
              ))}
        </div>

        <div>
          <Paginations
            data={kegiatan}
            itemsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default AdminInformasi;
