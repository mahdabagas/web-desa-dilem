const CardDetail = ({ gambar, judul }) => {
  return (
    <>
      <div className="rounded-[20px] overflow-hidden">
        <div className="w-full h-64 ">
          <img
            src={gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full bg-secondary px-4 py-6 flex flex-col items-center text-primary relative rounded-lg -top-2">
          <h4 className="font-semibold text-lg mb-2 text-center">{judul}</h4>
          <p className=""></p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
