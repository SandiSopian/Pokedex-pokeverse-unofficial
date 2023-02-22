import React, { useEffect, useState } from "react";
import { PokemonData } from "../data/pokemonData";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { colors } from "../utils/colorsClass";

const PokeCard = () => {
  const [PokemonDt, setPokemonDt] = useState(PokemonData);
  const [parent] = useAutoAnimate();

  const sortingOptions = [
    { label: "HP Descending", value: "HP Descending", func: handleSortHPDesc },
    { label: "HP Ascending", value: "HP Ascending", func: handleSortHPAsc },
    { label: "ATK Descending", value: "ATK Descending", func: handleSortATKDesc },
    { label: "ATK Ascending", value: "ATK Ascending", func: handleSortATKAsc },
    { label: "Speed Descending", value: "Speed Descending", func: handleSortSpeedDesc },
    { label: "Speed Ascending", value: "Speed Ascending", func: handleSortSpeedAsc },
    { label: "SpATK Descending", value: "SpATK Descending", func: handleSortSpATKDesc },
    { label: "SpATK Ascending", value: "SpATK Ascending", func: handleSortSpATKAsc },
    { label: "DEF Descending", value: "DEF Descending", func: handleSortDEFDesc },
    { label: "DEF Ascending", value: "DEF Ascending", func: handleSortDEFAsc },
    { label: "SpDEF Descending", value: "SpDEF Descending", func: handleSortSpDEFDesc },
    { label: "SpDEF Ascending", value: "SpDEF Ascending", func: handleSortSpDEFAsc },
  ];

  useEffect(() => {
    setPokemonDt(PokemonData);
  }, []);

  // Handle sort data functions
  // Sort by HP
  function handleSortHPDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.Hp > b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortHPAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.Hp < b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by ATK
  function handleSortATKDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.ATK > b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortATKAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.ATK < b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPATK
  function handleSortSpATKDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpATK > b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpATKAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpATK < b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by DEF
  function handleSortDEFDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.DEF > b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortDEFAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.DEF < b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPDEF
  function handleSortSpDEFDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpDEF > b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpDEFAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpDEF < b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPEED
  function handleSortSpeedDesc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.Speed > b.baseStats.Speed ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpeedAsc() {
    const sortedData = PokemonDt.slice().sort((a, b) => {
      return a.baseStats.Speed < b.baseStats.Speed ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Filter data function
  const filterTeam = (team) => {
    if (team === "All") {
      setPokemonDt(PokemonData);
    } else {
      setPokemonDt(PokemonData.filter((pokeTeam) => pokeTeam.team === team));
    }
  };

  return (
    <section className="grid gap-2 items-center justify-center">
      {/* Searching Data */}

      {/* Filtering Data */}
      <div className="flex items-center justify-center gap-2">
        <div className="border ">
          <select defaultValue={"All"} onChange={(e) => filterTeam(e.target.value)}>
            {/* Sort by Team */}
            <option value="disable" disabled>
              Select Team ...
            </option>
            <option value="All" className="cursor-pointer">
              All
            </option>
            <option value="electric" className="cursor-pointer">
              Electric
            </option>
            <option value="poison" className="cursor-pointer">
              Poison
            </option>
            <option value="water" className="cursor-pointer">
              Water
            </option>
            <option value="fire" className="cursor-pointer">
              Fire
            </option>
            <option value="dragon" className="cursor-pointer">
              Dragon
            </option>
            <option value="universal" className="cursor-pointer">
              Universal
            </option>
            <option value="special" className="cursor-pointer">
              Special
            </option>
          </select>
        </div>

        {/* Sort by BaseStats */}
        <div className="border ">
          <select
            onChange={(e) => {
              const selectedOption = sortingOptions.find((option) => option.value === e.target.value);
              if (selectedOption) {
                selectedOption.func();
              }
            }}
          >
            <option value="" disabled selected>
              Sort by ⇅
            </option>
            {sortingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
