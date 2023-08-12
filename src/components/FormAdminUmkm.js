import TextareaAutosize from "react-textarea-autosize";

const FormAdminUmkm = ({ detail, handleChange, handleSubmit }) => {
  return (
    <>
      <section>
        <h1 className="text-4xl font-medium text-secondary mb-10">
          Update UMKM
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="gambar"
              className="font-medium text-secondary text-[20px] block mb-2"
            >
              Gambar
            </label>
            <div className="flex items-center gap-4">
              <input
                value={detail.gambar}
                onChange={handleChange}
                disabled
                className="block bg-primary border-2 border-accent outline-none text-secondary p-5 rounded-[10px] text-[18px]"
              />
              <label for="gambar" className="cursor-pointer">
                <svg
                  className="w-16 h-16 fill-secondary "
                  viewBox="0 0 72 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62.25 39.75V49.5H72V56H62.25V65.75H55.75V56H46V49.5H55.75V39.75H62.25ZM62.276 0.75C64.057 0.75 65.5 2.19625 65.5 3.97725V34.3615C63.4123 33.6241 61.2141 33.2482 59 33.25V7.25H7L7.00325 52.75L37.2023 22.5477C37.7611 21.9871 38.5056 21.6499 39.2956 21.5996C40.0856 21.5493 40.8668 21.7894 41.4922 22.2747L41.7977 22.551L53.319 34.0885C50.7991 34.8564 48.4608 36.1266 46.4451 37.8226C44.4294 39.5186 42.778 41.6053 41.5906 43.9568C40.4031 46.3083 39.7042 48.8759 39.5359 51.5049C39.3677 54.1338 39.7335 56.7696 40.6115 59.2533L3.724 59.25C2.86864 59.2491 2.04861 58.9087 1.44409 58.3036C0.839567 57.6985 0.5 56.8781 0.5 56.0228V3.97725C0.505948 3.12373 0.847426 2.30681 1.45067 1.70296C2.05391 1.09911 2.87049 0.756808 3.724 0.75H62.276ZM20 13.75C21.7239 13.75 23.3772 14.4348 24.5962 15.6538C25.8152 16.8728 26.5 18.5261 26.5 20.25C26.5 21.9739 25.8152 23.6272 24.5962 24.8462C23.3772 26.0652 21.7239 26.75 20 26.75C18.2761 26.75 16.6228 26.0652 15.4038 24.8462C14.1848 23.6272 13.5 21.9739 13.5 20.25C13.5 18.5261 14.1848 16.8728 15.4038 15.6538C16.6228 14.4348 18.2761 13.75 20 13.75Z" />
                </svg>
                <input
                  name="gambar"
                  id="gambar"
                  type="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div>
            <label
              for="nama"
              className="font-medium text-secondary text-[20px] block mb-2"
            >
              Nama Usaha
            </label>
            <input
              name="nama"
              id="nama"
              autoComplete="off"
              value={detail.nama}
              onChange={handleChange}
              className="block w-full bg-primary border-2 border-accent outline-none text-secondary p-5 rounded-[10px] text-[18px]"
            />
          </div>
          <div>
            <label
              for="alamat"
              className="font-medium text-secondary text-[20px] block mb-2"
            >
              Alamat
            </label>
            <input
              name="alamat"
              id="alamat"
              autoComplete="off"
              value={detail.alamat}
              onChange={handleChange}
              className="block w-full bg-primary border-2 border-accent outline-none text-secondary p-5 rounded-[10px] text-[18px]"
            />
          </div>
          <div>
            <label
              for="kontak"
              className="font-medium text-secondary text-[20px] block mb-2"
            >
              Kontak
            </label>
            <input
              name="kontak"
              id="kontak"
              autoComplete="off"
              value={detail.kontak}
              onChange={handleChange}
              className="block w-1/4 bg-primary border-2 border-accent outline-none text-secondary p-5 rounded-[10px] text-[18px]"
            />
          </div>
          <div>
            <label
              for="deskripsi"
              className="font-medium text-secondary text-[20px] block mb-2"
            >
              Deskripsi
            </label>
            <TextareaAutosize
              name="deskripsi"
              id="deskripsi"
              autoComplete="off"
              value={detail.deskripsi}
              onChange={handleChange}
              className="w-full block bg-primary border-2 border-accent outline-none text-secondary p-6 rounded-[10px] text-[18px]"
            />
          </div>
          <button
            type="submit"
            className="bg-accent w-fit self-end text-secondary rounded-xl py-2 px-10 font-medium"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default FormAdminUmkm;
