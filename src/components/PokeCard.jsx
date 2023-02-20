import React, { useState } from "react";
import { PokemonData } from "../data/pokemonData";

const PokeCard = () => {
  const [PokemonDt, setPokemonDt] = useState(PokemonData);

  return (
    <section className="grid gap-4">
      {PokemonDt.map((pokemon, index) => (
        <div key={index} className={`border rounded-md w-[300px] flex flex-row bg-${pokemon.origin}`}>
          <div className="w-7/12 mr-1">
            <div className="container p-3 flex flex-col gap-1">
              <div className="border rounded-md">{pokemon.name}</div>
              <div className="flex gap-12">
                <div className="border rounded-md px-2 py-1">{pokemon.position}</div>
                <div className="border rounded-full p-1">{pokemon.rarity}</div>
              </div>
              <div className="flex gap-6">
                {pokemon.types.map((type, index) => {
                  return (
                    <div key={index} className="border rounded-md px-2 py-1">
                      {type}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`w-5/12 flex items-center justify-center rounded-l-full bg-${pokemon.bgOrigin}`}>
            <img src={pokemon.img} alt={pokemon.name} className="pl-6" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PokeCard;
