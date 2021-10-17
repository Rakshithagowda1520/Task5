class Pokemon {
    constructor(monster) {
      this.monster = monster;
      this.name = monster.name;
      this.species = monster.species;
      this.type = monster.type;
      this.hp = monster.hp;
      this.attack = monster.attack;
      this.defense = monster.defense;
      this.speed = monster.speed;
      this.ability1 = monster.ability1;
      this.ability2 = monster.ability2;
      this.evolutionStage = monster.evolutionStage;
    }
  }
  
  const pokeArray = [
    new Pokemon({
      name: 'Poliwag',
      species: 'Tadpole',
      type: 'Water',
      hp: 40,
      attack: 50,
      defense: 40,
      speed: 90,
      ability1: 'Water Absorb',
      ability2: 'Damp',
      evolutionStage: 1
    }),
  
    new Pokemon({
      name: 'Poliwhirl',
      species: 'Tadpole',
      type: 'Water',
      hp: 65,
      attack: 65,
      defense: 65,
      speed: 90,
      ability1: 'Water Absorb',
      ability2: 'Damp',
      evolutionStage: 2
    }),
  
    new Pokemon({
      name: 'Poliwrath',
      species: 'Tadpole',
      type: 'Water',
      hp: 90,
      attack: 95,
      defense: 95,
      speed: 70,
      ability1: 'Water Absorb',
      ability2: 'Damp',
      evolutionStage: 'max'
    }),
  
    new Pokemon({
      name: 'Krabby',
      species: 'River Crab',
      type: 'Water',
      hp: 30,
      attack: 105,
      defense: 90,
      speed: 50,
      ability1: 'Hyper Cutter',
      ability2: 'Shell Armor',
      evolutionStage: 1
    }),
  
    new Pokemon({
      name: 'Kingler',
      species: 'River Crab',
      type: 'Water',
      hp: 55,
      attack: 130,
      defense: 115,
      speed: 75,
      ability1: 'Hyper Cutter',
      ability2: 'Shell Armor',
      evolutionStage: 'max'
    }),
  
    new Pokemon({
      name: 'Weedle',
      species: 'Bug',
      type: 'Poison',
      hp: 40,
      attack: 35,
      defense: 30,
      speed: 50,
      ability1: 'Shield Dust',
      ability2: 'Run Away',
      evolutionStage: 1
    }),
  
    new Pokemon({
      name: 'Kakuna',
      species: 'Bug',
      type: 'Poison',
      hp: 45,
      attack: 25,
      defense: 50,
      speed: 35,
      ability1: 'Shed Skin',
      ability2: 'None',
      evolutionStage: 2
    }),
    new Pokemon({
        name: 'Beedrill',
        species: 'Bug',
        type: 'Poison',
        hp: 65,
        attack: 90,
        defense: 40,
        speed: 75,
        ability1: 'Swarm',
        ability2: 'Sniper',
        evolutionStage: 'max'
    })
  ];
  
  function displayPokemon(currentPokemon) {
    let monst = currentPokemon;
    evoStage = this.evolutionStage;
    let pokeName = document.querySelector('.pokeName');
    pokeName.textContent = this.name;
    let pokeSprite = document.querySelector('.currentSprite');
    pokeSprite.src = `images/${pokeName.textContent}.png`;
    pokeSprite.alt = pokeName.textContent;
    let pokeStats = document.querySelectorAll('.pokemonStats h3 span');
    pokeStats[0].textContent = this.species;
    pokeStats[1].textContent = this.type;
    pokeStats[2].textContent = this.hp;
    pokeStats[3].textContent = this.attack;
    pokeStats[4].textContent = this.defense;
    pokeStats[5].textContent = this.speed;
    pokeStats[6].textContent = this.ability1;
    pokeStats[7].textContent = this.ability2;
  }
  
  function loadPokemon() {
    pokeNumber = Math.floor(Math.random() * 8);
    displayPokemon.call(pokeArray[pokeNumber]);
  }
  
  TweenLite.from('.haunterCTA', 1.5, {
    opacity: 0,
    scale: 0,
    bezier: [{ left: -400, top: 300 }, { left: 15, top: 100 }],
    ease: Power2.easeOut
  });

  let demoBalls = document.querySelectorAll('.pokeball');
  let ballTops = document.querySelectorAll('.pokeballTop');
  
  demoBalls[0].addEventListener('mouseover', () => {
    ballTops[0].classList.remove('pokeballTop');
  });
  
  demoBalls[0].addEventListener('mouseleave', () => {
    ballTops[0].classList.add('pokeballTop');
  });
  
  demoBalls[0].addEventListener('click', () => {
    displayPokemon.call(pokeArray[0]);
  });
  
  demoBalls[1].addEventListener('mouseover', () => {
    ballTops[1].classList.remove('pokeballTop');
  });
  
  demoBalls[1].addEventListener('mouseleave', () => {
    ballTops[1].classList.add('pokeballTop');
  });
  
  demoBalls[1].addEventListener('click', () => {
    displayPokemon.call(pokeArray[3]);
  });
  
  demoBalls[2].addEventListener('mouseover', () => {
    ballTops[2].classList.remove('pokeballTop');
  });
  
  demoBalls[2].addEventListener('mouseleave', () => {
    ballTops[2].classList.add('pokeballTop');
  });
  
  demoBalls[2].addEventListener('click', () => {
    displayPokemon.call(pokeArray[5]);
  });
  