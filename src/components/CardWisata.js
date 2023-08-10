const CardWisata = ({data}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto rounded-[20px] overflow-hidden mb-4">
        <div className="w-full h-80">
          <img
            src={data.gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-primary text-center py-4 text-2xl text-white ">
          <h5>{data.nama}</h5>
        </div>
      </div>
    </>
  );
};

export default CardWisata;
