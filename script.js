

async function init() {
    await getPokeData();
    generatePoke();
}










function generatePoke() {
    let pokeContent = document.getElementById('content');
    pokeContent.innerHTML = "";
    for (let index = 0; index < pokeObj.length; index++) {
        pokeContent.innerHTML += pokeTemplate(index);
        
    }
    
    
}

