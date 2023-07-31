const CardInformasi = ({data}) => {
  return (
    <>
      <div className="rounded-[20px] overflow-hidden">
        <div className="w-full h-72 ">
          <img
            src={data.gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full bg-primary px-4 py-2 flex flex-col items-center text-white relative rounded-lg -top-2">
          <h4 className="font-semibold text-lg mb-2">{data.tentang_desa}</h4>
          <p className="">
          </p>
        </div>
      </div>
    </>
  );
};

export default CardInformasi;
