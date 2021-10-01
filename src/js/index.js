const pokemons = [
  {
    name: "Pikachu",
    health: "105ps",
    level: 10,
    category: "Electro",
    attacks: ["Impactrueno", "Rayo", "Ataque rapido", "Placaje"],
  },
  {
    name: "Ratata",
    health: "96ps",
    level: 9,
    category: "normal",
    attacks: ["Ataque rapido", "Golpe colmillo", "Reflejo", "Placaje"],
  },
];

let pokemon1 = pokemons[0];
let pokemon2 = pokemons[1];

const pokeLeft = document.querySelector(".poke-left .poke-data");
const pokeRight = document.querySelector(".poke-right .poke-data");
const startButton = document.querySelector(".button-start");
const parentAttackLeft = document.querySelector(".attack-left");
const parentAttackRight = document.querySelector(".attack-right");

const pokeAttacksLeft = (e, i) => {
  const buttonAttacksLeft = document.createElement("button");
  buttonAttacksLeft.className = `button-${i}`;
  buttonAttacksLeft.textContent = e;
  parentAttackLeft.appendChild(buttonAttacksLeft);
};
const pokeAttacksRight = (e, i) => {
  console.log(e);
  const buttonAttacksRight = document.createElement("button");
  buttonAttacksRight.className = `button-${i}`;
  buttonAttacksRight.textContent = e;
  parentAttackRight.appendChild(buttonAttacksRight);
};

const pokeStartLeft = () => {
  pokeLeft.innerHTML = `<div class="health-left">Vida =>${pokemon1.health} &nbsp &nbsp Nivel => ${pokemon1.level}</div>
    <div class="pokeName-left">${pokemon1.name} </div>`;
  pokemon1.attacks.forEach((e, i) => pokeAttacksLeft(e, i));
};
const pokeStartRight = () => {
  pokeRight.innerHTML = `<div class="health-left">Nivel => ${pokemon2.level} &nbsp &nbsp Vida =>${pokemon2.health}</div>
    <div class="pokeName-left">${pokemon2.name} </div>`;
  pokemon2.attacks.forEach((e, i) => pokeAttacksRight(e, i));
};

const startGame = () => {
  pokeStartLeft();
  pokeStartRight();
  startButton.remove();
};

startButton.addEventListener("click", startGame);
