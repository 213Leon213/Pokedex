


let BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'





async function getPokeData(path="") {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    
    console.log(responseToJson);
    
    
}