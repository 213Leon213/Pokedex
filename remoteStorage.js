
let pokeObj = [];



let BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

let EVO_URL = 'https://pokeapi.co/api/v2/evolution-chain/'



async function getPokeData() {
    for (let index = 1; index < 21; index++) {
        let response = await fetch(BASE_URL + index);
        let responseToJson = await response.json();
        pokeObj.push(responseToJson);
    }   
}

async function showCardEvoContent(index, event) {
  event.stopPropagation();
  let content = document.getElementById('card-content');
  content.innerHTML = "";
  content.classList.add('small-loader');
  let speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeObj[index].id}`);
  let speciesData = await speciesRes.json();
  let evoRes = await fetch(speciesData.evolution_chain.url);
  let evoData = await evoRes.json();
  let evoList = parseEvolutionChain(evoData.chain);
  content.classList.toggle('evo-img-container');
  let ul = document.getElementById('ul-navi');
  ul.classList.toggle('padding-bottom100');
  await loopEvoContent(evoList, content);
}

async function loopEvoContent(evoList, content) {
  for (let i = 0; i < evoList.length; i++) {
      let name = evoList[i]
      let pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let pokeData = await pokeRes.json();
      content.classList.remove('small-loader');
      content.innerHTML += `<img class="evo-img" style="width: 80px; height: 80px;" src="${pokeData.sprites.other.home.front_default}">`
    }
  
}

async function loadMoreFetch() {
    pokeObj = [];
    for (let index = 1; index < 100; index++) {
        let response = await fetch(BASE_URL + index);
        let responseToJson = await response.json();
        pokeObj.push(responseToJson);
    }
}