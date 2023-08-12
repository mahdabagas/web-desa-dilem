import { useEffect, useState } from "react";
import { url } from "../../api/url";
import TextareaAutosize from "react-textarea-autosize";

const AdminDesa = () => {
  const [desa, setDesa] = useState({
    tentang_desa: "",
    visi: "",
    misi: "",
  });

  useEffect(() => {
    const getDataDesa = async () => {
      try {
        const { data } = await url.get("/desa");
        setDesa(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDataDesa();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesa({ ...desa, [name]: value });
  };

  const updateDesa = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("Authorization");
    try {
      const res = await url.patch("/desa", desa, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <section>
        <h1 className="text-secondary font-semibold text-4xl text-center mb-3">
          Informasi Desa Dilem
        </h1>
        <form onSubmit={updateDesa}>
          <div className="mb-5">
            <label
              for="tentang-desa"
              className="font-medium text-secondary text-[28px] block mb-2"
            >
              Tentang Desa
            </label>
            <TextareaAutosize
              name="tentang-desa"
              id="tentang-desa"
              value={desa.tentang_desa}
              onChange={handleChange}
              className="w-full block bg-primary border-2 border-accent outline-none text-secondary p-6 rounded-[10px] text-[18px]"
            />
          </div>
          <div className="mb-5">
            <label
              for="visi"
              className="font-medium text-secondary text-[28px] block mb-2"
            >
              Visi
            </label>
            <TextareaAutosize
              name="visi"
              id="visi"
              value={desa.visi}
              onChange={handleChange}
              className="w-full block bg-primary border-2 border-accent outline-none text-secondary p-6 rounded-[10px] text-[18px]"
            ></TextareaAutosize>
          </div>
          <div className="mb-10">
            <label
              for="misi"
              className="font-medium text-secondary text-[28px] block mb-2"
            >
              Misi
            </label>
            <TextareaAutosize
              name="misi"
              id="misi"
              value={desa.misi}
              onChange={handleChange}
              className="w-full block bg-primary border-2 border-accent outline-none text-secondary p-6 rounded-[10px] text-[18px]"
            ></TextareaAutosize>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent  text-secondary rounded-xl py-2 px-10 font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AdminDesa;
