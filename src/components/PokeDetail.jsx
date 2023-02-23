import React from "react";
import { useParams } from "react-router-dom";
import { PokemonData } from "../data/pokemonData";
import { colors } from "../utils/colorsClass";
import { Tabs } from "flowbite-react";

function PokeDetail() {
  const { pokemonId } = useParams();
  const thisPokemon = PokemonData.find((poke) => poke.id === pokemonId);

  function pokeCardTemp() {
    return (
      <div className="relative z-0">
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
    );
  }

  return (
    <div className={`bg-${thisPokemon.bgDetailOrigin} flex flex-col items-center gap-6 `}>
      {/* Test tabs flowbite */}
      <Tabs.Group aria-label="Tabs with underline" style="underline" className="mt-6">
        {/* =====Basic Info Tab===== */}
        <Tabs.Item title="Info">
          {/* Pokemon Card */}
          {pokeCardTemp()}

          <div className="relative z-0 mt-6">
            {/* Pokemon Description */}
            <h1 className="text-lg font-bold mb-2">Description</h1>
            <div className="border rounded-md w-[300px] flex flex-row bg-white p-3 ">
              <div className="p-2 border rounded-md">{thisPokemon.description}</div>
            </div>
          </div>

          <div className="relative z-0 mt-6">
            {/* Pokemon Role */}
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

          <div className="relative z-0 mt-6">
            {/* Pokemon Flash */}
            <h1 className="text-lg font-bold mb-2">Flash</h1>
            <div className="border rounded-md w-[300px] flex flex-row bg-white p-3 ">
              <div className="p-2 border rounded-md">{thisPokemon.flash}</div>
            </div>
          </div>
        </Tabs.Item>

        {/* =====Base Stats Tab===== */}
        <Tabs.Item title="Base Stats">
          {pokeCardTemp()}

          {/* Pokemon Base Stats */}
        </Tabs.Item>

        {/* =====Skills Tab===== */}
        <Tabs.Item title="Skill">
          {pokeCardTemp()}

          {/* Pokemon Skills */}
          <div className="relative z-0 mt-6">
            <h1 className="text-lg font-bold mb-2">Skills Overview</h1>
            <div className="flex flex-col gap-2">
              {/* OHKO */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className={`bg-${thisPokemon.skillInfo.ohko.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.ohko.skillType}</div>
                <div className="flex justify-between ">
                  <div className={`bg-${thisPokemon.skillInfo.ohko.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.ohko.name}</div>
                  <div className="p-2 border rounded-md">{thisPokemon.skillInfo.ohko.energy}</div>
                </div>
                <div className="p-2 border rounded-md">{thisPokemon.skillInfo.ohko.skillDesc}</div>
              </div>

              {/* OVERHEAT */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className={`bg-${thisPokemon.skillInfo.overheat.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.overheat.skillType}</div>
                <div className="flex justify-between ">
                  <div className={`bg-${thisPokemon.skillInfo.overheat.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.overheat.name}</div>
                  <div className="p-2 border rounded-md">{thisPokemon.skillInfo.overheat.energy}</div>
                </div>
                <div className="p-2 border rounded-md">{thisPokemon.skillInfo.overheat.skillDesc}</div>
              </div>

              {/* NORMAL */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className={`bg-${thisPokemon.skillInfo.normal.skillType} p-2 border rounded-md capitalize`}>{thisPokemon.skillInfo.normal.skillType}</div>
                <div className="flex justify-between ">
                  <div className={`bg-${thisPokemon.skillInfo.normal.skillType} p-2 border rounded-md`}>{thisPokemon.skillInfo.normal.name}</div>
                  <div className="p-2 border rounded-md">{thisPokemon.skillInfo.normal.energy}</div>
                </div>
                <div className="p-2 border rounded-md">{thisPokemon.skillInfo.normal.skillDesc}</div>
              </div>
            </div>
          </div>
        </Tabs.Item>

        {/* =====Talents Tab===== */}
        <Tabs.Item title="Talent">
          {pokeCardTemp()}
          <div className="relative z-0 mt-6">
            {/* Pokemon Talent */}
            <h1 className="text-lg font-bold mb-2">Talent</h1>
            <div className="flex flex-col gap-2">
              {/* Floor 2 */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className=" p-2 border rounded-md">{thisPokemon.talent.floor2.name}</div>
                <div className="p-2 border rounded-md">{thisPokemon.talent.floor2.skillDesc}</div>
              </div>

              {/* Floor 3a */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className=" p-2 border rounded-md">{thisPokemon.talent.floor3a.name}</div>
                <div className="p-2 border rounded-md">{thisPokemon.talent.floor3a.skillDesc}</div>
              </div>

              {/* Floor 3b */}
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className=" p-2 border rounded-md">{thisPokemon.talent.floor3b.name}</div>
                <div className="p-2 border rounded-md">{thisPokemon.talent.floor3b.skillDesc}</div>
              </div>
            </div>
          </div>
        </Tabs.Item>

        {/* =====More Tab===== */}
        <Tabs.Item title="More">
          {pokeCardTemp()}
          <div className="relative z-0 mt-6">
            {/* Pokemon Extreme Training */}
            <h1 className="text-lg font-bold mb-2">Extreme Training</h1>
            <div className="flex flex-col gap-2">
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <div className="p-2 border rounded-md">{thisPokemon.extremeTraining.stage}</div>
                <div className="p-2 border rounded-md capitalize">{thisPokemon.extremeTraining.description}</div>
              </div>
            </div>
          </div>

          <div className="relative z-0 mt-6">
            {/* Pokemon Source */}
            <h1 className="text-lg font-bold mb-2">Source</h1>
            <div className="border rounded-md w-[300px] flex flex-row justify-center bg-white p-3">
              <div className="p-4 border rounded-md flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {thisPokemon.source.map((sources, index) => {
                    return (
                      <div key={index} className="border border-gray-400 grow rounded-md px-4 py-2">
                        {sources}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-0 mt-6">
            {/* Pokemon Evolutions */}
            <h1 className="text-lg font-bold mb-2">Evolution Chain</h1>
            <div className="flex flex-col gap-2">
              <div className="border rounded-md w-[300px] flex flex-col bg-white p-3 gap-2">
                <img src={thisPokemon.evolutions.img} alt={thisPokemon.evolutions.name} className="pl-5 pr-2 w-[50%] mx-auto" />
                <div className=" p-2 border rounded-md">{thisPokemon.evolutions.name}</div>
                <div className={`bg-${thisPokemon.evolutions.type} p-2 border rounded-md capitalize`}>{thisPokemon.evolutions.type}</div>
              </div>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

export default PokeDetail;
