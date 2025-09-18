
function pokeTemplate(index) {
    return `<div class="card margin-10 text-nowrap-center bg-danger text-light border-warning" onclick="showPokemon(${index})" style="width: 12rem;">
    <h2>${pokeObj[index].name}</h2>
  <img src="${pokeObj[index].sprites.other.home.front_default}" class="card-img-top ${getBgColor(index)}">
  <div class="card-body column">
    <img src="${addPictureFirst(index)}" class="card-img-top margin-10" >
    <${imageCheck(index)}>
  </div>
</div>
`
}

function pokeTemplateDetail(index) {
    return `<div class="card margin-10 text-nowrap-center bg-danger text-light border-warning" onclick="showPokemon(${index})" style="width: 18rem;">
    <h2>${pokeObj[index].name}</h2>
  <img src="${pokeObj[index].sprites.other.home.front_default}" class="card-img-top ${getBgColor(index)}">
  <div class="detail-img ${ifOnlyOneType(index)}">
  <img src="${addPictureFirst(index)}" class="card-img-top margin-10" style="width: 100px;">
  <${imageCheck(index)} id="second-type" style="width: 100px;">
  </div>
  <div class="card-body column">
    ${renderNavTemplate(index)}
    ${renderDetailsTemplate(index)}
    ${renderButtonsTemplate(index)}
  </div>
</div>`
}

function renderNavTemplate(index) {
  return `<ul id="ul-navi" class="nav padding-bottom100 nav-underline">
  <li class="nav-item" onclick="showCardMainContent(${index})">
    <a class="nav-link" aria-current="page">main</a>
  </li>
  <li class="nav-item" onclick="showCardStatsContent(${index}, event)">
    <a class="nav-link">stats</a>
  </li>
  <li class="nav-item" onclick="showCardEvoContent(${index}, event)">
    <a class="nav-link">evo chain</a>
  </li>
  </ul>`
}

function renderDetailsTemplate(index) {
  return `<div id="card-content" onload="showCardMainContent${(index)}">
      <div class="details-container">
                                <p>Height:</p><p>${pokeObj[index].height}m</p>
                              </div>
                              <div class="details-container">
                                <p>Weight:</p><p>${pokeObj[index].weight}kg</p>
                              </div>
                              <div class="details-container">
                                <p>Base experience:</p><p>${pokeObj[index].base_experience}</p>
                              </div>
                              <div class="details-container">
                                <p>Abilities:</p><p>${pokeObj[index].abilities[0].ability.name + abilityCheck(index) + ";"}</p>
                              </div></div></div>`
}

function renderButtonsTemplate(index) {
  return `<div id="button-container" class="buttons">
    <button id="button-previous" type="button" class="btn btn-warning" onclick="previousCard(${index}, event)"><</button>
    <button id="button-next" type="button" class="btn btn-warning" onclick="nextCard(${index}, event)">></button>
    </div>`
}


function showCardMainContent(index) {
  let content = document.getElementById('card-content');
  content.innerHTML = "";
   return content.innerHTML = `<div>
                                <p>Height:</p>
                                <p>${pokeObj[index].height + ""+ "m"}/p>
                              </div>
                              <div>
                                <p>Weight:</p>
                                <p>${pokeObj[index].weight + "" + "kg"}/p>
                              </div>
                              <div>
                                <p>Base experience:</p>
                                <p>${pokeObj[index].base_experience}/p>
                              </div>`}

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

function renderHPTemplate(index) {
  return `<div class="details-container">
          <p>hp</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[0].base_stat}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[0].base_stat}%"></div>
          </div>
          </div>`
}

function renderAttackTemplate(index) {
  return `<div class="details-container">
          <p>attack</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[1].base_stat}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[1].base_stat}%"></div>
          </div>
          </div>`
}

function renderDefenseTemplate(index) {
  return `<div class="details-container">
          <p>defense</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[2].base_stat}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[2].base_stat}%"></div>
          </div>
          </div>`
}

function renderSpecialAttackTemplate(index) {
  return `<div class="details-container">
          <p>special-attack</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[3].base_stat}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[3].base_stat}%"></div>
          </div>
          </div>`
}

function renderSpecialDefenseTemplate(index) {
   return `<div class="details-container">
            <p>special-defense</p>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[4].base_stat}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[4].base_stat}%"></div>
            </div>
            </div>`
}

function renderSpeedTemplate(index) {
  return `<div class="details-container">
          <p>speed</p>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${pokeObj[index].stats[5].base_stat}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar bg-warning" style="width: ${pokeObj[index].stats[5].base_stat}%"></div>
          </div>
          </div>`
}

async function showCardEvoContent(index, event) {
  event.stopPropagation();
  let content = document.getElementById('card-content');
  content.innerHTML = "";
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
      content.innerHTML += `<img class="evo-img" style="width: 80px; height: 80px;" src="${pokeData.sprites.other.home.front_default}">`
    }
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