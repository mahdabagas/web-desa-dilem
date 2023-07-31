const CardUMKM = ({ data, check }) => {
  return (
    <>
      <div className="rounded-lg h-full overflow-hidden">
        <div className="w-full h-72">
          <img
            src={data.gambar}
            alt="card_1"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-secondary p-2 rounded-b-lg">
          <h5 className="text-center">{data.nama}</h5>
        </div>
      </div>
    </>
  );
};

export default CardUMKM;
