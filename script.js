
async function init() {
    await getPokeData();
    generatePoke();
}

function generatePoke() {
    let pokeContent = document.getElementById('content');
    pokeContent.classList.remove('loader');
    pokeContent.innerHTML = "";
    for (let index = 0; index < pokeObj.length; index++) {
        pokeContent.innerHTML += pokeTemplate(index);
    }
}

function addPictureFirst(index) {
  switch (pokeObj[index].types[0].type.name) {
    case "normal": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/1.png"; case "fighting": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/2.png";
    case "flying": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/3.png"; case "poison": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/4.png";
    case "ground": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/5.png"; case "rock": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/6.png";
    case "bug": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/7.png"; case "ghost": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/8.png";
    case "steel": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/9.png"; case "fire": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/10.png";
    case "water": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/11.png"; case "grass": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/12.png";
    case "electric": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/13.png"; case "psychic": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/14.png";
    case "ice": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/15.png"; case "dragon": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/16.png";
    case "dark": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/17.png"; case "fairy": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/18.png";
    default: return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/1.png";
  }
}

function addPictureSecond(index) {
  if (!pokeObj[index].types?.[1]?.type?.name) return "";
  switch (pokeObj[index].types[1].type.name) {
    case "normal": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/1.png"; case "fighting": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/2.png";
    case "flying": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/3.png"; case "poison": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/4.png";
    case "ground": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/5.png"; case "rock": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/6.png";
    case "bug": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/7.png"; case "ghost": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/8.png";
    case "steel": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/9.png"; case "fire": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/10.png";
    case "water": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/11.png"; case "grass": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/12.png";
    case "electric": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/13.png"; case "psychic": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/14.png";
    case "ice": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/15.png"; case "dragon": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/16.png";
    case "dark": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/17.png"; case "fairy": return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/18.png";
    default: return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/1.png";
  }
}

function getBgColor(index) {
    let type = pokeObj[index].types[0].type.name

    return type
}



function showPokemon(index) {
    let popupBackground = document.getElementById('popup');
    popupBackground.classList.toggle('displaynone');
    document.body.classList.toggle('body-overflow');
    let popupContent = document.getElementById('popupContent');
    popupContent.classList.toggle('displaynone');
    popupContent.innerHTML = "";
    popupContent.innerHTML += pokeTemplateDetail(index);
    buttonNextCheck(index);
    buttonPreviousCheck(index);
}

function closePopup() {
    document.body.classList.toggle('body-overflow');
    let popupBackground = document.getElementById('popup');
    popupBackground.classList.toggle('displaynone');
    let popupContent = document.getElementById('popupContent');
    popupContent.classList.toggle('displaynone');
}

function abilityCheck(index) {
    if (pokeObj[index].abilities?.[1]?.ability?.name) {
        return `, ${pokeObj[index].abilities[1].ability.name}`;
    } else {
        return "";
    }
}


function imageCheck(index) {
    if (pokeObj[index].types?.[1]?.type?.name) {
        return `img src="${addPictureSecond(index)}" class="card-img-top margin-10"`;
    }
}


function parseEvolutionChain(chain) {
  const evoList = [];
  let current = chain;

  while (current) {
    evoList.push(current.species.name);
    current = current.evolves_to[0];
  } return evoList;
}

function ifOnlyOneType(index) {
    if (!pokeObj[index].types[1]) {
        return "only-type";
    }
}

async function loadMore() {
    let button = document.getElementById('btn-loadmore');
    button.style.display = "none";
    let pokeContent = document.getElementById('content');
    pokeContent.innerHTML = "";
    pokeContent.classList.add('loader');
    await loadMoreFetch();
    pokeContent.classList.remove('loader');
    for (let index = 0; index < pokeObj.length; index++) {
        pokeContent.innerHTML += pokeTemplate(index);
    }
}

async function searchBar() {
    let filterList = [];
    let searchbar = document.getElementById('search-bar').value.toLowerCase();
    document.getElementById('btn-loadmore').style.display = "none";
    searchBarFilter(searchbar, filterList);
    noResultsFound(filterList);
    noInput(searchbar);
}


function nextCard(index, event) {
    event.stopPropagation();
    closePopup();
    index++
    showPokemon(index);
}

function buttonNextCheck(index) {
    let nextButton = document.getElementById('button-next');
    if (index == pokeObj.length -1) {
        nextButton.style.display = "none";
    }
}

function previousCard(index, event) {
    event.stopPropagation();
    closePopup();
    index--,
    showPokemon(index);
}

function buttonPreviousCheck(index) {
    let previousButton = document.getElementById('button-previous');
    let buttonContainer = document.getElementById('button-container');
    if (index == 0) {
        previousButton.style.display = "none";
        buttonContainer.classList.toggle('buttons-nextonly');
    }
}

function noResultsFound(filterList) {
    if (filterList.length > 0) {
            renderResults(filterList);
        } else {
            let content = document.getElementById('content');
            return content.innerText = "no results found";
        }
}

function noInput(searchbar) {
    if (searchbar.length === 0) {
        generatePoke();
        let advice = document.getElementById('advice');
        advice.innerText = "";
        document.getElementById('btn-loadmore').style.display = "";
    }
}

function searchBarFilter(searchbar, filterList) {
    if (searchbar.length > 2) {
        document.getElementById('btn-loadmore').style.display = "none";
        let advice = document.getElementById('advice');
        advice.innerText = "";
        for (let i = 0; i < pokeObj.length; i++) {
            let pokemon = pokeObj[i];
            if (pokemon.name.toLowerCase().includes(searchbar)) {
                filterList.push({ pokemon, originalIndex: i });
            }
        }} else {
        let advice = document.getElementById('advice');
        advice.innerText = "Please type in at least 3 letters.";
    }
}

function showCardStatsContent(index, event) {
  event.stopPropagation();
  let content = document.getElementById('card-content');
  content.innerHTML = "";
  if (content.classList.contains('evo-img-container')) {
    content.classList.remove('evo-img-container');
  }
  return content.innerHTML = `  ${renderHPTemplate(index)}
                                ${renderAttackTemplate(index)}
                                ${renderDefenseTemplate(index)}
                                ${renderSpecialAttackTemplate(index)}
                                ${renderSpecialDefenseTemplate(index)}
                                ${renderSpeedTemplate(index)}`; 
}

function renderResults(filterList) {
    let content = document.getElementById('content');
    content.innerHTML = "";
    for (let i = 0; i < filterList.length; i++) {
      let index = filterList[i].originalIndex;
      content.innerHTML += `<div class="card margin-10 text-nowrap-center bg-danger text-light border-warning" onclick="showPokemon(${index})" style="width: 12rem;">
    <h2>${pokeObj[index].name}</h2>
  <img src="${pokeObj[index].sprites.other.home.front_default}" class="card-img-top ${getBgColor(index)}" alt="...">
  <div class="card-body column">
    <img src="${addPictureFirst(index)}" class="card-img-top margin-10" >
    <${imageCheck(index)}>
  </div>
</div>`}}