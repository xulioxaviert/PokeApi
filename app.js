window.onload = () => {
  init();
  //const input$$ = document.querySelector("#input");
  // input$$.addEventListener("input", () => pokemonSearch());
  // preloader();
  
};

let pokeArray = [];

// let newDiv = document.createElement("div");
// newDiv.className = "title";
// newDiv.innerHTML = `<h2>Listado de Pokemons</h2>
// <input type="text" id ="input" placeholder="Pokemon's name" value="bulbasaur">
// <input type="button" name="input" value="Send" onclick="pokemonSearch()" ></input>
// <div id="pokemonsFiltered"  >
// <h2>Listado de Pokemons filtrados</h2>
// </div>
// `;
// document.body.appendChild(newDiv);

// const preloader = () => {
//   const preloaderPokemon = document.createElement("div");
//   preloaderPokemon.innerHTML = `<div class="preloader">
//     <img src="./img/pikachu.gif" /></div>`;
//   document.body.appendChild(preloaderPokemon);
// };

const init = async () => {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=51");
  const dataJson = await pokemonData.json();
  pokeArray = dataJson.results;

  
  printPokemons(pokeArray);
  
};




const printPokemons = (pokeArray) => {
  
  const newDivContainer = document.createElement("div");
  newDivContainer.className = "container";
  let newH2 = document.createElement("h2");
  newH2.className = "container-subtitle";
  newH2.textContent = "Listado de Pokemons";
  document.body.appendChild(newH2);

  for (const i of pokeArray) {
    fetch(i.url)
      .then((res) => res.json())
      .then((myRes) => {
        //console.log(myRes);
        newDivContainer.innerHTML += `<div class="pokemon_card">
        <img src=${myRes.sprites.other["official-artwork"]["front_default"]} 
        alt =${myRes.name}/>
        <h2 class="subtitle">${myRes.name}</h2>
        <p> Peso: ${myRes.weight} Kgr </p>
        <p> Altura: ${myRes.height} M</p>
        </div>`;
      });
    document.body.appendChild(newDivContainer);
  }
};

//******* RECORRIDO DE LOS DATOS DENTRO DE UN OBJETO JSON**********
// const printPokemons = (pokeArray) => {
//   const newDivContainer = document.createElement("div");
//   newDivContainer.className = "container";

//   for (const var2 of pokeArray) {
//     console.log("el nombre del pokemon es: " + var2.name + " y su url:" + var2.url);
//     fetch(var2.url).then((res) => res.json()).then((myRes) => {
//       console.log("pre:" + myRes);
//       console.log("1er for: " + myRes.sprites.front_default);
//       console.log("imagen: " + myRes.sprites.other['official-artwork']['front_default'])
//       console.log(myRes.base_experience);

//       for (const var1 of myRes.abilities) {
//         console.log("2do for:" + var1.ability.name);
//         console.log("2do for:" + var1.ability.url);
//         console.log("2do for:" + var1.is_hidden);
//         console.log("2do for:" + var1.slot);
//          }
//     })
//   }
// };

//   for (let i = 0; i < pokeArray.length; i += 4) {
//     newDivContainer.innerHTML += `<div class="pokemon_card">
//     <img src=${pokeArray[i + 1]} alt =${pokeArray[i]}/>
//     <h2 class="subtitle">${pokeArray[i]}</h2>
//       <p> Peso: ${pokeArray[i + 2]} Kgr </p>
//       <p> Altura: ${pokeArray[i + 3]} M</p>
//       </div>`;
//   }
//   document.body.appendChild(newDivContainer);
// }

const pokemonSearch = () => {
  console.log(pokeArray);
  let pokemonSearch = document.getElementById("input").value;
  const newDivContainer = document.createElement("div");
  newDivContainer.innerHTML = `<h2 class="subtitle">Pokemon Encontrado</h2>`;
  
//Buscamos cualquier pokemon de la api
  //console.log(pokemonSearch);
  const url = "http://pokeapi.co/api/v2/pokemon/" + pokemonSearch.toLowerCase();
  fetch(url)
    .then((res) => res.json())
    .then((myRes) => {
      
      console.log(myRes);
      let input = document.querySelector("#pokemonSearch");
      input.innerHTML = `
      <div class="title"> <h2 class="subtitle">Pokemon Encontrado</h2></div>
      <div class="pokemon_card"> 
           <img src=${myRes.sprites.other["official-artwork"]["front_default"]}
           alt =${myRes.name}/>
           <h2 class="subtitle">${myRes.name}</h2>
           <p> Peso: ${myRes.weight} Kgr </p>
           <p> Altura: ${myRes.height} M</p>
           </div>`;
      
      
      // const newDivContainer = document.createElement("div");
      // newDivContainer.className = "container";
      // let newH2 = document.createElement("h2");
      // newH2.className = "container-subtitle";
      // newH2.textContent = "Pokemon encontrado";
      // input.parentNode.insertBefore(newH2, input);
    });

  



};








