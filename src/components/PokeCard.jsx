import React, { useState } from "react";
import { firePokemon } from "../data/pokemonData";

const PokeCard = () => {
  const [FirePokemon, setFirePokemon] = useState(firePokemon);

  return (
    <section className="bg-gray-100">
      {FirePokemon.map((pokemon) => (
        <div className="border w-[300px] flex ">
          <div>
            <div>{pokemon.name}</div>
            <div>{pokemon.position}</div>
            <div>{pokemon.rarity}</div>
            <div>{pokemon.types}</div>
            <div></div>
            <img src={pokemon.img} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PokeCard;
