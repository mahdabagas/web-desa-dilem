const CardInformasi = ({ data }) => {
  // Menyingkat teks
  const shortText = (deskripsi) => {
    console.log(deskripsi);
    const splitText = deskripsi.split(" ", 10);
    const result = splitText.join(" ") + " ...";
    return result;
  };

  return (
    <>
      <div className="rounded-[20px] overflow-hidden drop-shadow-xl">
        <div className="w-full h-72 ">
          <img
            src={data.gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full bg-primary px-4 py-4 flex flex-col text-white rounded-[20px] relative -top-4">
          <h4 className="font-semibold text-lg mb-2">{data.tentang_desa}</h4>
          <p className="">{shortText(data.deskripsi)}</p>
        </div>
      </div>
    </>
  );
};

export default CardInformasi;
