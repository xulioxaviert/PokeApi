window.onload = () => {
  init();
};

const pokeArray = [];

/* let banner = document.createElement("div");
banner.className = "banner";
banner.innerHTML = `<img src="./img/banner.jpg"/>`;
document.body.appendChild(banner);
 */
let newHDivImg = document.createElement("div");
newHDivImg.className = "img_center"
newHDivImg.innerHTML = `<img src="./img/pokemon.jpg" alt ="img_center"/>`;
document.body.appendChild(newHDivImg);

let newDiv = document.createElement("div");
newDiv.className = "title";
newDiv.innerHTML = `<h1>Listado de Pokemons</h1>`;
document.body.appendChild(newDiv);

const init = async () => {
  for (let i = 1; i < 51; i++) {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const dataJson = await pokemonData.json();

    pokeArray.push(dataJson.name);
    pokeArray.push(dataJson.sprites.other.home.front_default);
    pokeArray.push(dataJson.weight);
    pokeArray.push(dataJson.height);
  }

  //console.log(pokeArray);
  printPokemons(pokeArray);
};

function printPokemons(pokeArray) {
  const newDivContainer = document.createElement("div");
  newDivContainer.className = "container";

  for (let i = 0; i < pokeArray.length; i += 4) {
    newDivContainer.innerHTML += `<div class="pokemon_card">
    <img src=${pokeArray[i + 1]} alt =${pokeArray[i]}/>
    <h2 class="subtitle">${pokeArray[i]}</h2>
      <p> Peso: ${pokeArray[i + 2]} Kgr </p>
      <p> Altura: ${pokeArray[i + 3]} M</p>
      </div>`;
  }
  document.body.appendChild(newDivContainer);
}




