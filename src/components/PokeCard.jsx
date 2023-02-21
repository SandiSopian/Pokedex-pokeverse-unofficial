import React, { useState } from "react";
import { PokemonData } from "../data/pokemonData";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const PokeCard = () => {
  const [PokemonDt, setPokemonDt] = useState(PokemonData);
  const [parent] = useAutoAnimate();
  let colors = [
    "bg-normal" == "bg-normal",
    "bg-normal2" == "bg-normal2",
    "bg-fire" == "bg-fire",
    "bg-fire2" == "bgfire2",
    "bg-water" == "bg-water",
    "bg-water2 == bg-water2",
    "bg-electric" == "bg-electric",
    "bg-electric2" == "bg-electric2",
    "bg-grass" == "bg-grass",
    "bg-grass2" == "bg-grass2",
    "bg-ice" == "bg-ice",
    "bg-ice2" == "bg-ice2",
    "bg-fighting" == "bg-fighting",
    "bg-fighting2" == "bg-fighting2",
    "bg-poison" == "bg-poison",
    "bg-poison2" == "bg-poison2",
    "bg-ground" == "bg-ground",
    "bg-ground2" == "bg-ground2",
    "bg-flying" == "bg-flying",
    "bg-flying2" == "bg-flying2",
    "bg-psychic" == "bg-psychic",
    "bg-psychic2" == "bg-psychic2",
    "bg-bug" == "bg-bug",
    "bg-bug2" == "bg-bug2",
    "bg-rock" == "bg-rock",
    "bg-rock2" == "bg-rock2",
    "bg-ghost" == "bg-ghost",
    "bg-ghost2" == "bg-ghost2",
    "bg-dragon" == "bg-dragon",
    "bg-dragon2" == "bg-dragon2",
    "bg-dark" == "bg-dark",
    "bg-dark2" == "bg-dark2",
    "bg-steel" == "bg-steel",
    "bg-steel2" == "bg-steel2",
    "bg-fairy" == "bg-fairy",
    "bg-fairy2" == "bg-fairy2",
  ];

  const filter = (origin) => {
    setPokemonDt(PokemonData.filter((pokeOrigin) => pokeOrigin.origin === origin));
  };

  return (
    <section className="grid gap-4">
      {/* Searching Data */}

      {/* Filtering Data */}
      <div>
        Select Type:
        <select name="" subject="">
          <option value="" selected="selected" onClick={() => setPokemonDt(PokemonData)}>
            All
          </option>
          <option value="" selected="selected" onClick={() => filter("steel")}>
            Steel
          </option>
          <option value="" selected="selected" onClick={() => filter("fire")}>
            Fire
          </option>
        </select>
      </div>

      {/* Sorting Data */}

      {/* Mapping Data */}
      <div ref={parent}>
        {PokemonDt.map((pokemon, index) => (
          <div key={index} className={`border rounded-md w-[300px] flex flex-row bg-${pokemon.origin}`}>
            <div className="w-7/12 mr-1">
              <div className="container p-3 flex flex-col gap-1">
                <div className="rounded-md">{pokemon.name}</div>
                <div className="flex justify-between gap-2">
                  <div className="border border-gray-400 rounded-md px-6 p-1">{pokemon.position}</div>
                  <div className="border-2 border-gray-400 rounded-full p-1">{pokemon.rarity}</div>
                </div>
                <div className="flex justify-between gap-2">
                  {pokemon.types.map((type, index) => {
                    return (
                      <div key={index} className="border border-gray-400 rounded-md px-4">
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
      </div>
    </section>
  );
};
export default PokeCard;
