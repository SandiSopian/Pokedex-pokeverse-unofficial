import React, { useEffect, useState } from "react";
import { PokemonData } from "../data/pokemonData";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { colors } from "../utils/colorsClass";

const PokeCard = () => {
  const [PokemonDt, setPokemonDt] = useState(PokemonData);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    setPokemonDt(PokemonDt);
  });

  // Handle sort data functions
  // Sort by HP
  function handleSortHPDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.Hp > b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortHPAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.Hp < b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by ATK
  function handleSortATKDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.ATK > b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortATKAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.ATK < b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPATK
  function handleSortSpATKDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.SpATK > b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpATKAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.SpATK < b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by DEF
  function handleSortDEFDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.DEF > b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortDEFAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.DEF < b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPDEF
  function handleSortSpDEFDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.SpDEF > b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpDEFAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.SpDEF < b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPEED
  function handleSortSpeedDesc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.Speed > b.baseStats.Speed ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpeedAsc() {
    const sortedData = [...PokemonDt].sort((a, b) => {
      return a.baseStats.Speed < b.baseStats.Speed ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Filter data function
  const filterTeam = (team) => {
    setPokemonDt(PokemonData.filter((pokeTeam) => pokeTeam.team === team));
  };

  return (
    <section className="grid gap-4">
      {/* Searching Data */}

      {/* Filtering Data */}
      <div>
        <select defaultValue={"All"}>
          {/* Sort by Team */}
          <option value="disable" disabled>
            Select Team ...
          </option>
          <option value="All" onClick={() => setPokemonDt(PokemonData)} className="cursor-pointer">
            All
          </option>
          <option value="electric" onClick={() => filterTeam("electric")} className="cursor-pointer">
            Electric
          </option>
          <option value="poison" onClick={() => filterTeam("poison")} className="cursor-pointer">
            Poison
          </option>
          <option value="water" onClick={() => filterTeam("water")} className="cursor-pointer">
            Water
          </option>
          <option value="fire" onClick={() => filterTeam("fire")} className="cursor-pointer">
            Fire
          </option>
          <option value="dragon" onClick={() => filterTeam("dragon")} className="cursor-pointer">
            Dragon
          </option>
          <option value="universal" onClick={() => filterTeam("universal")} className="cursor-pointer">
            Universal
          </option>
          <option value="special" onClick={() => filterTeam("special")} className="cursor-pointer">
            Special
          </option>

          {/* Sort by BaseStats */}
          <option value="disable" disabled>
            Sort by ...
          </option>
          <option value="HP" onClick={handleSortHPDesc} className="cursor-pointer">
            <span>HP ↓</span>
          </option>
          <option value="HP" onClick={handleSortHPAsc} className="cursor-pointer">
            <span>HP ↑</span>
          </option>
          <option value="ATK" onClick={handleSortATKDesc} className="cursor-pointer">
            <span>ATK ↓</span>
          </option>
          <option value="ATK" onClick={handleSortATKAsc} className="cursor-pointer">
            <span>ATK ↑</span>
          </option>
          <option value="SpATK" onClick={handleSortSpATKDesc} className="cursor-pointer">
            <span>SpATK ↓</span>
          </option>
          <option value="SpATK" onClick={handleSortSpATKAsc} className="cursor-pointer">
            <span>SpATK ↑</span>
          </option>
          <option value="DEF" onClick={handleSortDEFDesc} className="cursor-pointer">
            <span>DEF ↓</span>
          </option>
          <option value="DEF" onClick={handleSortDEFAsc} className="cursor-pointer">
            <span>DEF ↑</span>
          </option>
          <option value="SpDEF" onClick={handleSortSpDEFDesc} className="cursor-pointer">
            <span>SpDEF ↓</span>
          </option>
          <option value="SpDEF" onClick={handleSortSpDEFAsc} className="cursor-pointer">
            <span>SpDEF ↑</span>
          </option>
          <option value="Speed" onClick={handleSortSpeedDesc} className="cursor-pointer">
            <span>Speed ↓</span>
          </option>
          <option value="Speed" onClick={handleSortSpeedAsc} className="cursor-pointer">
            <span>Speed ↑</span>
          </option>
        </select>
      </div>

      {/* Display Mapping Data */}
      <div ref={parent} className="relative z-0">
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
                      <div key={index} className="border grow border-gray-800 rounded-md px-4">
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
