import React, { useEffect, useState } from "react";
import { PokemonData } from "../data/pokemonData";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { colors } from "../utils/colorsClass";
import { Link } from "react-router-dom";

const PokeCard = () => {
  const [pokemonDt, setPokemonDt] = useState(PokemonData);
  const [parent] = useAutoAnimate();

  const sortingOptions = [
    { label: "Default", value: "Default", func: handleSortById },
    { label: "HP ⇩", value: "HP Descending", func: handleSortHPDesc },
    { label: "HP ⇧", value: "HP Ascending", func: handleSortHPAsc },
    { label: "ATK ⇩", value: "ATK Descending", func: handleSortATKDesc },
    { label: "ATK ⇧", value: "ATK Ascending", func: handleSortATKAsc },
    { label: "DEF ⇩", value: "DEF Descending", func: handleSortDEFDesc },
    { label: "DEF ⇧", value: "DEF Ascending", func: handleSortDEFAsc },
    { label: "SpATK ⇩", value: "SpATK Descending", func: handleSortSpATKDesc },
    { label: "SpATK ⇧", value: "SpATK Ascending", func: handleSortSpATKAsc },
    { label: "SpDEF ⇩", value: "SpDEF Descending", func: handleSortSpDEFDesc },
    { label: "SpDEF ⇧", value: "SpDEF Ascending", func: handleSortSpDEFAsc },
    { label: "Speed ⇩", value: "Speed Descending", func: handleSortSpeedDesc },
    { label: "Speed ⇧", value: "Speed Ascending", func: handleSortSpeedAsc },
  ];

  const filteredOptions = [
    { label: "All", value: "All" },
    { label: "Electric", value: "electric" },
    { label: "Poison", value: "poison" },
    { label: "Water", value: "water" },
    { label: "Fire", value: "fire" },
    { label: "Dragon", value: "dragon" },
    { label: "Universal", value: "universal" },
    { label: "Special", value: "special" },
  ];

  useEffect(() => {
    setPokemonDt(PokemonData);
  }, []);

  // Handle sort data functions
  function handleSortById() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by HP
  function handleSortHPDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.Hp < b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortHPAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.Hp > b.baseStats.Hp ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by ATK
  function handleSortATKDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.ATK < b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortATKAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.ATK > b.baseStats.ATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPATK
  function handleSortSpATKDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpATK < b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpATKAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpATK > b.baseStats.SpATK ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by DEF
  function handleSortDEFDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.DEF < b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortDEFAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.DEF > b.baseStats.DEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPDEF
  function handleSortSpDEFDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpDEF < b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpDEFAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.SpDEF > b.baseStats.SpDEF ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }

  // Sort by SPEED
  function handleSortSpeedDesc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.Speed < b.baseStats.Speed ? 1 : -1;
    });
    setPokemonDt(sortedData);
  }
  function handleSortSpeedAsc() {
    const sortedData = pokemonDt.slice().sort((a, b) => {
      return a.baseStats.Speed > b.baseStats.Speed ? 1 : -1;
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
    <section className="grid gap-2 items-center justify-center mt-16">
      {/* Searching Data */}

      {/*=====Filtering Data=====*/}
      <div className="flex items-center justify-center gap-2 lg:-ml-28 xl:-ml-80">
        <div className="border">
          {/* Sort by Team */}
          <select onChange={(e) => filterTeam(e.target.value)}>
            <option value="disable" disabled>
              Select Team ...
            </option>
            {filteredOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="border ">
          {/*Sort by BaseStats*/}
          <select
            onChange={(e) => {
              const selectedOption = sortingOptions.find((option) => option.value === e.target.value);
              if (selectedOption) {
                selectedOption.func();
              }
            }}
          >
            <option value="disable" disabled>
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

      {/*=====Display Mapping Data=====*/}
      <div ref={parent} className="relative z-0 md:grid md:grid-cols-2 xl:grid-cols-3 lg:ml-56 xl:ml-72 2xl:ml-32 2xl:-mr-32 ">
        {pokemonDt.map((pokemon) => (
          <div key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`} className={`drop-shadow-2xl rounded-md overflow-hidden w-[300px] flex flex-row my-3 md:mx-3 bg-${pokemon.rarity}`}>
              <div className="w-7/12 mr-1">
                <div className="container p-3 flex flex-col gap-1">
                  <div className="font-semibold">{pokemon.name}</div>
                  <div className="flex justify-between gap-2">
                    <div className={`bg-${pokemon.bgRarity} capitalize rounded-md px-6 p-1`}>{pokemon.position}</div>
                    <div className={`uppercase p-1 font-extrabold text-${pokemon.bgRarity}`}>{pokemon.rarity}</div>
                  </div>
                  <div className="flex justify-between gap-2">
                    {pokemon.types.map((type, index) => {
                      return (
                        <div key={index} className={`grow rounded-md px-4 bg-${type.toLowerCase()}`}>
                          <div>{type}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={`w-5/12 flex items-center justify-center rounded-l-full bg-${pokemon.bgRarity}`}>
                <img src={pokemon.img} alt={pokemon.name} className="pl-5 pr-2" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PokeCard;
