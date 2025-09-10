
let pokeObj = [];

let BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'





async function getPokeData() {
    for (let index = 1; index < 40; index++) {
        let response = await fetch(BASE_URL + index);
        let responseToJson = await response.json();
        pokeObj.push(responseToJson);
    }
    console.log(pokeObj);
        
}