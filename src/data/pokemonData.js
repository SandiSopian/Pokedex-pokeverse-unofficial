import MCX from "../assets/images/Mega-Charizard-X.png";
import TK from "../assets/images/Tapu-Koko.png";
import MV from "../assets/images/Mega-Venusaur.png";
import Sui from "../assets/images/Suicune.png";
import Ray from "../assets/images/Rayquaza.png";
import Lug from "../assets/images/Lugia.png";
import Dit from "../assets/images/Ditto.png";
import PriKyo from "../assets/images/Primal-Kyogre.png";

export const PokemonData = [
  // Electric Team
  {
    id: "1",
    name: "Tapu Koko",
    team: "electric",
    position: "State",
    role: ["Output", "Paralysis"],
    roleDescription: "Electric Team's Status-type Pokemon",
    origin: "electric",
    bgOrigin: "electric2",
    bgDetailOrigin: "electric3",
    types: ["Electric", "Fairy"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: TK,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 112,
      HpDesc: "S",
      ATK: 122,
      ATKDesc: "SS",
      DEF: 110,
      DEFDesc: "S",
      SpATK: 106,
      SpATKDesc: "A",
      SpDEF: 100,
      SpDEFDesc: "A",
      Speed: 130,
      SpeedDesc: "SS",
    },
    skillInfo: {
      ohko: {
        name: "Thunder Punch",
        skillType: "electric",
        energy: "-2",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Shock Wave",
        skillType: "electric",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Lighting Attack",
        skillType: "electric",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Poison Team
  {
    id: "2",
    name: "Mega Venusaur",
    team: "poison",
    position: "state",
    role: ["Output", "Poison"],
    roleDescription: "Poison Team's Status-type Pokemon",
    origin: "poison",
    bgOrigin: "poison2",
    bgDetailOrigin: "poison3",
    types: ["Grass", "Poison"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: MV,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 100,
      HpDesc: "A",
      ATK: 89,
      ATKDesc: "B",
      DEF: 135,
      DEFDesc: "SS",
      SpATK: 111,
      SpATKDesc: "S",
      SpDEF: 135,
      SpDEFDesc: "SS",
      Speed: 80,
      SpeedDesc: "B",
    },
    skillInfo: {
      ohko: {
        name: "Solar Beam",
        skillType: "grass",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Growth",
        skillType: "grass",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Venoshock",
        skillType: "poison",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Water Team
  {
    id: "3",
    name: "Suicune",
    team: "water",
    position: "state",
    role: ["Output", "Damp", "Charming"],
    roleDescription: "Water Team's Status-type Pokemon",
    origin: "water",
    bgOrigin: "water2",
    bgDetailOrigin: "water3",
    types: ["Water"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: Sui,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 106,
      HpDesc: "A",
      ATK: 78,
      ATKDesc: "B",
      DEF: 119,
      DEFDesc: "S",
      SpATK: 93,
      SpATKDesc: "A",
      SpDEF: 119,
      SpDEFDesc: "S",
      Speed: 85,
      SpeedDesc: "B",
    },
    skillInfo: {
      ohko: {
        name: "Blizzard",
        skillType: "water",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Mist",
        skillType: "water",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Ice Fang",
        skillType: "water",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Fire Team
  {
    id: "4",
    name: "Mega Charizard X",
    team: "fire",
    position: "state",
    role: ["Output", "Buring"],
    roleDescription: "Fire Team's Status-type Pokemon",
    origin: "fire",
    bgOrigin: "fire2",
    bgDetailOrigin: "fire3",
    types: ["Fire", "Dragon"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: MCX,
    evolutions: {
      img: MCX,
      name: "Charizard",
      type: "fire",
    },
    baseStats: {
      Hp: 132,
      HpDesc: "S",
      ATK: 145,
      ATKDesc: "SS",
      DEF: 100,
      DEFDesc: "A",
      SpATK: 90,
      SpATKDesc: "A",
      SpDEF: 91,
      SpDEFDesc: "A",
      Speed: 100,
      SpeedDesc: "A",
    },
    skillInfo: {
      ohko: {
        name: "Blast Burn",
        skillType: "fire",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Flame Burst",
        skillType: "fire",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Flare Blitz",
        skillType: "fire",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Dragon Team
  {
    id: "5",
    name: "Rayquaza",
    team: "dragon",
    position: "state",
    role: ["Output", "Dragon Energy"],
    roleDescription: "Dragon Team's Status-type Pokemon",
    origin: "dragon",
    bgOrigin: "dragon2",
    bgDetailOrigin: "dragon3",
    types: ["Dragon"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: Ray,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 105,
      HpDesc: "A",
      ATK: 150,
      ATKDesc: "SS",
      DEF: 90,
      DEFDesc: "A",
      SpATK: 150,
      SpATKDesc: "SS",
      SpDEF: 90,
      SpDEFDesc: "A",
      Speed: 95,
      SpeedDesc: "A",
    },
    skillInfo: {
      ohko: {
        name: "Hyper Beam",
        skillType: "normal",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Twister",
        skillType: "dragon",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Air Slash",
        skillType: "flying",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Universal
  {
    id: "6",
    name: "Lugia",
    team: "universal",
    position: "DEF",
    role: ["Tank", "Buff"],
    roleDescription: "Suitable for various lineups",
    origin: "flying",
    bgOrigin: "flying2",
    bgDetailOrigin: "flying3",
    types: ["Flying", "Psychic"],
    rarity: "ssr",
    bgRarity: "ssr2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: Lug,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 106,
      HpDesc: "A",
      ATK: 90,
      ATKDesc: "A",
      DEF: 130,
      DEFDesc: "SS",
      SpATK: 90,
      SpATKDesc: "A",
      SpDEF: 154,
      SpDEFDesc: "SS",
      Speed: 110,
      SpeedDesc: "S",
    },
    skillInfo: {
      ohko: {
        name: "Safeguard",
        skillType: "psychic",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Aeroblast",
        skillType: "flying",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Fly",
        skillType: "flying",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Special
  {
    id: "7",
    name: "Ditto",
    team: "special",
    position: "Material",
    role: ["Material"],
    roleDescription: "Special Pokemon ",
    origin: "normal",
    bgOrigin: "normal2",
    bgDetailOrigin: "normal3",
    types: ["Normal"],
    rarity: "n",
    bgRarity: "n2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: Dit,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 100,
      HpDesc: "A",
      ATK: 100,
      ATKDesc: "A",
      DEF: 100,
      DEFDesc: "A",
      SpATK: 100,
      SpATKDesc: "A",
      SpDEF: 100,
      SpDEFDesc: "A",
      Speed: 100,
      SpeedDesc: "A",
    },
    skillInfo: {
      ohko: {
        name: "Bubble",
        skillType: "normal",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Bubble",
        skillType: "normal",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Bubble",
        skillType: "normal",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
  // ==============================================================
  // Soul Link
  {
    id: "8",
    name: "Original Kyogre",
    team: "water",
    position: "Output",
    role: ["Output", "Lifesteal"],
    roleDescription: "Water Team's Status-type Pokemon",
    origin: "water",
    bgOrigin: "water2",
    bgDetailOrigin: "water3",
    types: ["Water"],
    rarity: "sp",
    bgRarity: "sp2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    flash: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    extremeTraining: {
      stage: "Stage 5",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
    },
    source: ["Island IV", "Island V", "Shop", "World Gym"],
    img: PriKyo,
    evolutions: {
      img: "",
      name: "",
      type: "",
    },
    baseStats: {
      Hp: 130,
      HpDesc: "SS",
      ATK: 103,
      ATKDesc: "A",
      DEF: 130,
      DEFDesc: "SS",
      SpATK: 172,
      SpATKDesc: "SSS",
      SpDEF: 135,
      SpDEFDesc: "SS",
      Speed: 110,
      SpeedDesc: "S",
    },
    skillInfo: {
      ohko: {
        name: "Ice Soul",
        skillType: "water",
        energy: "energy -3",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      overheat: {
        name: "Aqua Ring",
        skillType: "water",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      normal: {
        name: "Origin Pulse",
        skillType: "water",
        energy: "energy +1",
        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
    talent: {
      floor2: {
        name: "Floor 2 - Talent Skill (3)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3a: {
        name: "Floor 3 - Talent Skill (1)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
      floor3b: {
        name: "Floor 3 - Talent Skill (2)",

        skillDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aperiam officiis magni nam ut blanditiis harum doloremque ipsum perspiciatis earum",
      },
    },
  },
];
