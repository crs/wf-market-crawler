const { WEAPON_PRIMARY } = require('../constants.js').ITEM_TYPE;
const { ENEMY, FACTION_REWARD, LOCATION, REWARD, VAULTED } = require('../constants.js').ACQUISITION;
const { BOW, LAUNCHER, RIFLE, SHOTGUN, SNIPER, SPEARGUN } = require('../constants.js').PRIMARY_CATEGORIES;

const {
  DREKAR_TROOPERS,
  HEAVY_GUNNERS,
  STALKER,
  VOR_AND_KRILL,
} = ENEMY;
const {
  ARBITERS_OF_HEXIS,
  CEPHALON_SUDA,
  NEW_LOKA,
  RED_VEIL,
  STEEL_MERIDIAN,
  THE_PERRIN_SEQUENCE,
} = FACTION_REWARD;
const {
  BARO_KITEER,
  CEPHALON_SIMARIS,
  DOJO_BIO_LAB,
  DOJO_CHEM_LAB,
  DOJO_ENERGY_LAB,
  DOJO_TENNO_LAB,
  MARKET,
} = LOCATION;
const {
  ANNIVERSARY,
  CETUS_BOUNTY_GHOUL,
  INVASIONS,
  LOGIN_REWARD,
  OPERATION_PLAGUE_STAR,
  RAZORBACK_ARMADA,
  RELICS,
  SANCTUARY_ONSLAUGHT,
} = REWARD;

const weaponPrimaries = [
  {
    name: 'Argonak',
    acquisition: DOJO_CHEM_LAB,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Baza',
    acquisition: DOJO_TENNO_LAB,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Boltor',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 2,
  },
  {
    name: 'Boltor Prime',
    acquisition: VAULTED,
    category: RIFLE,
    masteryRank: 13,
  },
  {
    name: 'Telos Boltor',
    acquisition: ARBITERS_OF_HEXIS,
    category: RIFLE,
    masteryRank: 12,
  },
  {
    name: 'Braton',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'MK1-Braton',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Braton Prime',
    acquisition: RELICS,
    category: RIFLE,
    masteryRank: 8,
  },
  {
    name: 'Braton Vandal',
    acquisition: SANCTUARY_ONSLAUGHT,
    category: RIFLE,
    masteryRank: 4,
  },
  {
    name: 'Burston',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Burston Prime',
    acquisition: RELICS,
    category: RIFLE,
    masteryRank: 12,
  },
  {
    name: 'Buzlok',
    acquisition: DOJO_CHEM_LAB,
    category: RIFLE,
    masteryRank: 11,
  },
  {
    name: 'Dera',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 4,
  },
  {
    name: 'Dera Vandal',
    acquisition: INVASIONS,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Gorgon',
    acquisition: HEAVY_GUNNERS,
    category: RIFLE,
    masteryRank: 3,
  },
  {
    name: 'Prisma Gorgon',
    acquisition: BARO_KITEER,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Gorgon Wraith',
    acquisition: RAZORBACK_ARMADA,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Grakata',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 5,
  },
  {
    name: 'Prisma Grakata',
    acquisition: BARO_KITEER,
    category: RIFLE,
    masteryRank: 11,
  },
  {
    name: 'Grinlok',
    acquisition: DOJO_CHEM_LAB,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Harpak',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 3,
  },
  {
    name: 'Hema',
    acquisition: DOJO_BIO_LAB,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Hind',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Karak',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 1,
  },
  {
    name: 'Karak Wraith',
    acquisition: INVASIONS,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Latron',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 0,
  },
  {
    name: 'Latron Prime',
    acquisition: VAULTED,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Latron Wraith',
    acquisition: INVASIONS,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Mutalist Quanta',
    acquisition: DOJO_BIO_LAB,
    category: RIFLE,
    masteryRank: 2,
  },
  {
    name: 'Opticor',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 14,
  },
  {
    name: 'Paracyst',
    acquisition: DOJO_BIO_LAB,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Soma',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 6,
  },
  {
    name: 'Soma Prime',
    acquisition: VAULTED,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Stradavar',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 8,
  },
  {
    name: 'Supra',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 12,
  },
  {
    name: 'Supra Vandal',
    acquisition: BARO_KITEER,
    category: RIFLE,
    masteryRank: 14,
  },
  {
    name: 'Sybaris',
    acquisition: DOJO_TENNO_LAB,
    category: RIFLE,
    masteryRank: 5,
  },
  {
    name: 'Sybaris Prime',
    acquisition: RELICS,
    category: RIFLE,
    masteryRank: 12,
  },
  {
    name: 'Dex Sybaris',
    acquisition: ANNIVERSARY,
    category: RIFLE,
    masteryRank: 7,
  },
  {
    name: 'Tenora',
    acquisition: DOJO_TENNO_LAB,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Tetra',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 3,
  },
  {
    name: 'Prisma Tetra',
    acquisition: BARO_KITEER,
    category: RIFLE,
    masteryRank: 4,
  },
  {
    name: 'Tiberon',
    acquisition: MARKET,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Tiberon Prime',
    acquisition: RELICS,
    category: RIFLE,
    masteryRank: 14,
  },
  {
    name: 'Veldt',
    acquisition: DOJO_TENNO_LAB,
    category: RIFLE,
    masteryRank: 8,
  },
  {
    name: 'Zenith',
    acquisition: LOGIN_REWARD,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Amprex',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Flux Rifle',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 6,
  },
  {
    name: 'Glaxion',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 8,
  },
  {
    name: 'Ignis',
    acquisition: DOJO_CHEM_LAB,
    category: RIFLE,
    masteryRank: 5,
  },
  {
    name: 'Ignis Wraith',
    acquisition: `${DOJO_CHEM_LAB} [Limited]`,
    category: RIFLE,
    masteryRank: 9,
  },
  {
    name: 'Quanta',
    acquisition: DOJO_ENERGY_LAB,
    category: RIFLE,
    masteryRank: 4,
  },
  {
    name: 'Quanta Vandal',
    acquisition: BARO_KITEER,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Quartakk',
    acquisition: CETUS_BOUNTY_GHOUL,
    category: RIFLE,
    masteryRank: 10,
  },
  {
    name: 'Synapse',
    acquisition: DOJO_BIO_LAB,
    category: RIFLE,
    masteryRank: 11,
  },
  {
    name: 'Arca Plasmor',
    acquisition: DOJO_ENERGY_LAB,
    category: SHOTGUN,
    masteryRank: 10,
  },
  {
    name: 'Astilla',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 10,
  },
  {
    name: 'Boar',
    acquisition: DREKAR_TROOPERS,
    category: SHOTGUN,
    masteryRank: 2,
  },
  {
    name: 'Boar Prime',
    acquisition: VAULTED,
    category: SHOTGUN,
    masteryRank: 12,
  },
  {
    name: 'Convectrix',
    acquisition: DOJO_ENERGY_LAB,
    category: SHOTGUN,
    masteryRank: 7,
  },
  {
    name: 'Corinth',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 10,
  },
  {
    name: 'Drakgoon',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 5,
  },
  {
    name: 'Hek',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 4,
  },
  {
    name: 'Vaykor Hek',
    acquisition: STEEL_MERIDIAN,
    category: SHOTGUN,
    masteryRank: 12,
  },
  {
    name: 'Kohm',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 5,
  },
  {
    name: 'Phage',
    acquisition: DOJO_BIO_LAB,
    category: SHOTGUN,
    masteryRank: 11,
  },
  {
    name: 'Sobek',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 7,
  },
  {
    name: 'Strun',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 1,
  },
  {
    name: 'MK1-Strun',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 0,
  },
  {
    name: 'Strun Wraith',
    acquisition: INVASIONS,
    category: SHOTGUN,
    masteryRank: 10,
  },
  {
    name: 'Tigris',
    acquisition: MARKET,
    category: SHOTGUN,
    masteryRank: 9,
  },
  {
    name: 'Tigris Prime',
    acquisition: RELICS,
    category: SHOTGUN,
    masteryRank: 13,
  },
  {
    name: 'Sancti Tigris',
    acquisition: NEW_LOKA,
    category: SHOTGUN,
    masteryRank: 12,
  },
  {
    name: 'Lanka',
    acquisition: DOJO_ENERGY_LAB,
    category: SNIPER,
    masteryRank: 10,
  },
  {
    name: 'Rubico',
    acquisition: MARKET,
    category: SNIPER,
    masteryRank: 6,
  },
  {
    name: 'Snipetron',
    acquisition: OPERATION_PLAGUE_STAR,
    category: SNIPER,
    masteryRank: 0,
  },
  {
    name: 'Snipetron Vandal',
    acquisition: INVASIONS,
    category: SNIPER,
    masteryRank: 5,
  },
  {
    name: 'Vectis',
    acquisition: MARKET,
    category: SNIPER,
    masteryRank: 2,
  },
  {
    name: 'Vectis Prime',
    acquisition: VAULTED,
    category: SNIPER,
    masteryRank: 14,
  },
  {
    name: 'Vulkar',
    acquisition: MARKET,
    category: SNIPER,
    masteryRank: 3,
  },
  {
    name: 'Vulkar Wraith',
    acquisition: BARO_KITEER,
    category: SNIPER,
    masteryRank: 7,
  },
  {
    name: 'Attica',
    acquisition: DOJO_TENNO_LAB,
    category: BOW,
    masteryRank: 7,
  },
  {
    name: 'Cernos',
    acquisition: MARKET,
    category: BOW,
    masteryRank: 6,
  },
  {
    name: 'Cernos Prime',
    acquisition: RELICS,
    category: BOW,
    masteryRank: 12,
  },
  {
    name: 'Rakta Cernos',
    acquisition: RED_VEIL,
    category: BOW,
    masteryRank: 12,
  },
  {
    name: 'Daikyu',
    acquisition: DOJO_TENNO_LAB,
    category: BOW,
    masteryRank: 10,
  },
  {
    name: 'Dread',
    acquisition: STALKER,
    category: BOW,
    masteryRank: 5,
  },
  {
    name: 'Lenz',
    acquisition: DOJO_ENERGY_LAB,
    category: BOW,
    masteryRank: 8,
  },
  {
    name: 'Mutalist Cernos',
    acquisition: MARKET,
    category: BOW,
    masteryRank: 7,
  },
  {
    name: 'Paris',
    acquisition: MARKET,
    category: BOW,
    masteryRank: 3,
  },
  {
    name: 'MK1-Paris',
    acquisition: MARKET,
    category: BOW,
    masteryRank: 0,
  },
  {
    name: 'Paris Prime',
    acquisition: RELICS,
    category: BOW,
    masteryRank: 8,
  },
  {
    name: 'Zhuge',
    acquisition: MARKET,
    category: BOW,
    masteryRank: 10,
  },
  {
    name: 'Miter',
    acquisition: VOR_AND_KRILL,
    category: LAUNCHER,
    masteryRank: 6,
  },
  {
    name: 'Ogris',
    acquisition: DOJO_CHEM_LAB,
    category: LAUNCHER,
    masteryRank: 8,
  },
  {
    name: 'Panthera',
    acquisition: MARKET,
    category: LAUNCHER,
    masteryRank: 7,
  },
  {
    name: 'Penta',
    acquisition: MARKET,
    category: LAUNCHER,
    masteryRank: 6,
  },
  {
    name: 'Secura Penta',
    acquisition: THE_PERRIN_SEQUENCE,
    category: LAUNCHER,
    masteryRank: 12,
  },
  {
    name: 'Simulor',
    acquisition: CEPHALON_SIMARIS,
    category: LAUNCHER,
    masteryRank: 5,
  },
  {
    name: 'Synoid Simulor',
    acquisition: CEPHALON_SUDA,
    category: LAUNCHER,
    masteryRank: 12,
  },
  {
    name: 'Tonkor',
    acquisition: MARKET,
    category: LAUNCHER,
    masteryRank: 5,
  },
  {
    name: 'Torid',
    acquisition: DOJO_BIO_LAB,
    category: LAUNCHER,
    masteryRank: 4,
  },
  {
    name: 'Zarr',
    acquisition: MARKET,
    category: LAUNCHER,
    masteryRank: 7,
  },
  {
    name: 'Ferrox',
    acquisition: DOJO_ENERGY_LAB,
    category: SPEARGUN,
    masteryRank: 14,
  },
  {
    name: 'Javlok',
    acquisition: DOJO_CHEM_LAB,
    category: SPEARGUN,
    masteryRank: 7,
  },
  {
    name: 'Scourge',
    acquisition: DOJO_TENNO_LAB,
    category: SPEARGUN,
    masteryRank: 6,
  },
];

module.exports = weaponPrimaries.map(object => ({ ...object, type: WEAPON_PRIMARY }));
