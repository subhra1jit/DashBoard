const Card = ({ item }) => {
  return (
    <div className="flex flex-col justify-start space-y-2 py-3 px-6 bg-[#ffffff] rounded-xl border-2 border-[#ecedf0] shadow-md">
      <div
        className={`w-8 h-8  rounded-full p-1 flex justify-center items-center bg-green-400`}
      >
        {item.icon}
      </div>
      <p className="text-xs text-black font-bold">{item.smallText}</p>
      <div className="flex justify-between items-center w-full ">
        <h3 className=" text-black font-bold text-2xl">{item.value}</h3>
        <p className="w-10 h-3 text-xs bg-green-300 text-green-500 rounded-md p-2 flex justify-center items-center">
          {item.smallNumber}
        </p>
      </div>
    </div>
  );
};

export default Card;
