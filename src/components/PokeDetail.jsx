import React from "react";
import { useParams } from "react-router-dom";
import { PokemonData } from "../data/pokemonData";
import { colors } from "../utils/colorsClass";
import { Tabs } from "flowbite-react";

function PokeDetail() {
  const { pokemonId } = useParams();
  const thisPokemon = PokemonData.find((poke) => poke.id === pokemonId);

  const data = [
    { name: "HP", value: thisPokemon.baseStats.Hp, label: thisPokemon.baseStats.HpDesc, color: `bg-${thisPokemon.origin}` },
    { name: "Attack", value: thisPokemon.baseStats.ATK, label: thisPokemon.baseStats.ATKDesc, color: `bg-${thisPokemon.origin}` },
    { name: "Defense", value: thisPokemon.baseStats.DEF, label: thisPokemon.baseStats.DEFDesc, color: `bg-${thisPokemon.origin}` },
    { name: "Sp. Atk", value: thisPokemon.baseStats.SpATK, label: thisPokemon.baseStats.SpATKDesc, color: `bg-${thisPokemon.origin}` },
    { name: "Sp. Def", value: thisPokemon.baseStats.SpDEF, label: thisPokemon.baseStats.SpDEFDesc, color: `bg-${thisPokemon.origin}` },
    { name: "Speed", value: thisPokemon.baseStats.Speed, label: thisPokemon.baseStats.SpeedDesc, color: `bg-${thisPokemon.origin}` },
  ];

  // =====Pokemon Card Function=====
  function pokeCardTemp() {
    return (
      <div className="relative z-0 flex flex-col justify-center items-center">
        <div className={`drop-shadow-2xl rounded-md overflow-hidden w-[300px] flex flex-row bg-${thisPokemon.rarity}`}>
          <div className="w-7/12 mr-1">
            <div className="container p-3 flex flex-col gap-1">
              <div className="font-semibold">{thisPokemon.name}</div>
              <div className="flex justify-between gap-2">
                <div className={`bg-${thisPokemon.bgRarity} capitalize rounded-md px-6 p-1`}>{thisPokemon.position}</div>
                <div className={`uppercase p-1 font-extrabold text-${thisPokemon.bgRarity}`}>{thisPokemon.rarity}</div>
              </div>
              <div className="flex justify-between gap-2">
                {thisPokemon.types.map((type, index) => {
                  return (
                    <div key={index} className={`grow rounded-md px-4 bg-${type.toLowerCase()}`}>
                      <div>{type}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`w-5/12 flex items-center justify-center rounded-l-full bg-${thisPokemon.bgRarity}`}>
            <img src={thisPokemon.img} alt={thisPokemon.name} className="pl-5 pr-2 " />
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Card Function=====
  function skillBarChart({ data }) {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold mb-2">Base Stats</h1>
        <div className=" bg-white shadow w-[300px] overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {data.map((item) => (
              <li key={item.name} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.value}</div>
                </div>
                <div className="relative mt-2 h-6 flex flex-col bg-gray-100 rounded-full overflow-hidden">
                  <div className={`absolute inset-y-0 left-0 ${item.color} rounded-full`} style={{ width: `${item.value * 0.5}%` }} />
                  <div className="flex justify-end items-center h-full pr-2">
                    <div className="text-right text-xs font-medium text-gray-400">{item.label}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // =====Pokemon Description=====
  function pokeDescription() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Description */}
        <h1 className="text-lg font-bold mb-2">Description</h1>
        <div className="border rounded-md w-[300px] flex flex-row bg-white p-3 ">
          <div className="p-2 border rounded-md">{thisPokemon.description}</div>
        </div>
      </div>
    );
  }

  // =====Pokemon Role=====
  function pokeRole() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Role */}
        <h1 className="text-lg font-bold mb-2">Role</h1>
        <div className="border rounded-md w-[300px] flex flex-row justify-center bg-white p-3">
          <div className="p-4 border rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {thisPokemon.role.map((roles, index) => {
                return (
                  <div key={index} className="border border-gray-400 bg-slate-400 grow rounded-md px-4 py-2">
                    {roles}
                  </div>
                );
              })}
            </div>
            <div className="border border-gray-400 bg-slate-400 rounded-md px-4">{thisPokemon.roleDescription}</div>
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Flash=====
  function pokeFlash() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Flash */}
        <h1 className="text-lg font-bold mb-2">Flash</h1>
        <div className="border rounded-md w-[300px] flex flex-row bg-white p-3 ">
          <div className="p-2 border rounded-md">{thisPokemon.flash}</div>
        </div>
      </div>
    );
  }

  // =====Pokemon Skills=====
  function pokeSkills() {
    return (
      // {/* Pokemon Skills */}
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold mb-2">Skills Overview</h1>
        <div className="flex flex-col gap-2">
          {/* OHKO */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className={`bg-${thisPokemon.skillInfo.ohko.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.ohko.skillType}</div>
            <div className="flex justify-between ">
              <div className={`bg-${thisPokemon.skillInfo.ohko.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.ohko.name}</div>
              <div className="p-2 border bg-slate-400 rounded-md">{thisPokemon.skillInfo.ohko.energy}</div>
            </div>
            <div className="p-2 border rounded-md">{thisPokemon.skillInfo.ohko.skillDesc}</div>
          </div>

          {/* OVERHEAT */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className={`bg-${thisPokemon.skillInfo.overheat.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.overheat.skillType}</div>
            <div className="flex justify-between ">
              <div className={`bg-${thisPokemon.skillInfo.overheat.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.overheat.name}</div>
              <div className="p-2 border bg-slate-400 rounded-md">{thisPokemon.skillInfo.overheat.energy}</div>
            </div>
            <div className="p-2 border rounded-md">{thisPokemon.skillInfo.overheat.skillDesc}</div>
          </div>

          {/* NORMAL */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className={`bg-${thisPokemon.skillInfo.normal.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.normal.skillType}</div>
            <div className="flex justify-between ">
              <div className={`bg-${thisPokemon.skillInfo.normal.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.normal.name}</div>
              <div className="p-2 border bg-slate-400 rounded-md">{thisPokemon.skillInfo.normal.energy}</div>
            </div>
            <div className="p-2 border rounded-md">{thisPokemon.skillInfo.normal.skillDesc}</div>
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Talent=====
  function pokeTalent() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Talent */}
        <h1 className="text-lg font-bold mb-2">Talent</h1>

        <div className="flex flex-col gap-2">
          {/* Floor 2 */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className=" p-2 border bg-slate-400 rounded-md">{thisPokemon.talent.floor2.name}</div>
            <div className="p-2 border rounded-md">{thisPokemon.talent.floor2.skillDesc}</div>
          </div>

          {/* Floor 3a */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className=" p-2 border bg-slate-400 rounded-md">{thisPokemon.talent.floor3a.name}</div>
            <div className="p-2 border rounded-md">{thisPokemon.talent.floor3a.skillDesc}</div>
          </div>

          {/* Floor 3b */}
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className=" p-2 border bg-slate-400 rounded-md">{thisPokemon.talent.floor3b.name}</div>
            <div className="p-2 border rounded-md">{thisPokemon.talent.floor3b.skillDesc}</div>
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Extreme Training=====
  function pokeExtremeTrain() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Extreme Training */}
        <h1 className="text-lg font-bold mb-2">Extreme Training</h1>
        <div className="flex flex-col gap-2">
          <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
            <div className="p-2 border bg-slate-400 rounded-md">{thisPokemon.extremeTraining.stage}</div>
            <div className="p-2 border rounded-md capitalize">{thisPokemon.extremeTraining.description}</div>
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Source=====
  function pokeSource() {
    return (
      <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
        {/* Pokemon Source */}
        <h1 className="text-lg font-bold mb-2">Source</h1>
        <div className="border rounded-md w-[300px] flex flex-row justify-center bg-white p-3">
          <div className="p-4 border rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {thisPokemon.source.map((sources, index) => {
                return (
                  <div key={index} className="border border-gray-400 bg-slate-400 grow rounded-md px-4 py-2">
                    {sources}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =====Pokemon Source=====
  function pokeEvolutions(thisPokemon) {
    if (thisPokemon.evolutions.name !== "") {
      return (
        <div className="relative z-0 mt-6 flex flex-col justify-center items-center">
          {/* Pokemon Evolutions */}
          <h1 className="text-lg font-bold mb-2">Evolution Chain</h1>
          <div className="flex flex-col gap-2">
            <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
              <img src={thisPokemon.evolutions.img} alt={thisPokemon.evolutions.name} className="pl-5 pr-2 w-[50%] mx-auto" />
              <div className="p-2 border bg-slate-400 rounded-md">{thisPokemon.evolutions.name}</div>
              <div className={`bg-${thisPokemon.evolutions.type} p-2 border rounded-md capitalize`}>{thisPokemon.evolutions.type}</div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {/* Mobile Version */}
      <div className={`bg-${thisPokemon.bgOrigin} bg-cover min-h-[100vh] flex flex-col items-center gap-6 lg:hidden`}>
        {/* Test tabs flowbite */}
        <Tabs.Group aria-label="Tabs with underline" style="underline" className="mt-6">
          {/* =====Basic Info Tab===== */}
          <Tabs.Item title="Info">
            {/* Pokemon Card */}
            {pokeCardTemp()}

            {pokeDescription()}

            {pokeRole()}

            {pokeFlash()}
          </Tabs.Item>

          {/* =====Base Stats Tab===== */}
          <Tabs.Item title="Base Stats">
            {pokeCardTemp()}

            {/* Pokemon Base Stats */}
            {skillBarChart({ data })}
          </Tabs.Item>

          {/* =====Skills Tab===== */}
          <Tabs.Item title="Skill">
            {pokeCardTemp()}

            {pokeSkills()}
          </Tabs.Item>

          {/* =====Talents Tab===== */}
          <Tabs.Item title="Talent">
            {pokeCardTemp()}

            {pokeTalent()}
          </Tabs.Item>

          {/* =====More Tab===== */}
          <Tabs.Item title="More">
            {pokeCardTemp()}

            {pokeExtremeTrain()}

            {pokeSource()}

            {pokeEvolutions(thisPokemon)}
          </Tabs.Item>
        </Tabs.Group>
      </div>

      {/* Desktop Version */}
      <div className="lg:flex flex-col justify-center hidden">
        <Tabs.Group aria-label="Tabs with underline" style="underline" className="mt-6">
          {/* =====Basic Info Tab===== */}
          <Tabs.Item title="Info">
            {/* Pokemon Card */}
            {pokeCardTemp()}

            {pokeDescription()}

            {pokeRole()}

            {pokeFlash()}
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  );
}

export default PokeDetail;
