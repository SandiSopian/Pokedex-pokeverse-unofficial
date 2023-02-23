import React from "react";
import { useParams } from "react-router-dom";
import { PokemonData } from "../data/pokemonData";
import { colors } from "../utils/colorsClass";

function PokeDetail() {
  const { pokemonId } = useParams();
  const thisPokemon = PokemonData.find((poke) => poke.id === pokemonId);

  return (
    <div className={`bg-${thisPokemon.bgDetailOrigin} flex flex-col h-screen items-center gap-6 `}>
      {/* Pokemon Card */}
      <div className="relative z-0 mt-16 ">
        <div className={`rounded-md overflow-hidden w-[300px] flex flex-row bg-${thisPokemon.origin}`}>
          <div className="w-7/12 mr-1">
            <div className="container p-3 flex flex-col gap-1">
              <div className="rounded-md">{thisPokemon.name}</div>
              <div className="flex justify-between gap-2">
                <div className="border border-gray-400 rounded-md px-6 p-1">{thisPokemon.position}</div>
                <div className="border-2 border-gray-400 rounded-full p-1">{thisPokemon.rarity}</div>
              </div>
              <div className="flex justify-between gap-2">
                {thisPokemon.types.map((type, index) => {
                  return (
                    <div key={index} className="border grow border-gray-800 rounded-md px-4">
                      {type}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`w-5/12 flex items-center justify-center rounded-l-full bg-${thisPokemon.bgOrigin}`}>
            <img src={thisPokemon.img} alt={thisPokemon.name} className="pl-5 pr-2 " />
          </div>
        </div>
      </div>

      {/* Pokemon Description */}
      <div className="relative z-0">
        <h1 className="text-lg font-bold mb-2">Description</h1>
        <div className="border rounded-md w-[300px] flex flex-row bg-white p-3 ">
          <div className="p-2 border rounded-md">{thisPokemon.description}</div>
        </div>
      </div>

      {/* Pokemon Role */}
      <div className="relative z-0">
        <h1 className="text-lg font-bold mb-2">Role</h1>
        <div className="border rounded-md w-[300px] flex flex-row justify-center bg-white p-3">
          <div className="p-4 border rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {thisPokemon.role.map((roles, index) => {
                return (
                  <div key={index} className="border border-gray-400 grow rounded-md px-4 py-2">
                    {roles}
                  </div>
                );
              })}
            </div>
            <div className="border border-gray-400 rounded-md px-4">{thisPokemon.roleDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;
