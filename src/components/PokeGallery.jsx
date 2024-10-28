import React from "react";
import PokeCard from "./PokeCard";

const PokeGallery = ({ pokemon }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 h-screen w-screen place-items-center p-8 gap-8 ">
      {pokemon.map((poke, index) => (
        <PokeCard
          key={index}
          name={poke.name}
          picture={poke.picture}
          type={poke.type}
        />
      ))}
    </div>
  );
};

export default PokeGallery;
