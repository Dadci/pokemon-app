import React from "react";

const PokeCard = ({ name, picture, type, key }) => {
  return (
    <div
      key={key}
      className=" w-full h-full flex flex-col items-center justify-center p-4 rounded-md gap-2 bg-blue-100 hover:bg-blue-200 
      hover:shadow-lg transition duration-300 ease-in-out"
    >
      <img src={picture} alt={name} className="w-40 h-40" />
      <div className="flex flex-col items-center justify-center gap-1 pb-4">
        <h2 className="text-xl font-medium text-blue-950">{name}</h2>
        <h4 className="text-gray-600">{type}</h4>
      </div>
    </div>
  );
};

export default PokeCard;
