
function pokeTemplate(index) {
    return `<div class="card" style="width: 18rem;">
  <img src="${pokeObj[index].sprites.other.home.front_default}" class="card-img-top" alt="...">
  <div class="card-body">
    <img src="${addPicture0(index)}" class="card-img-top" >
    <img src="${addPicture1(index)}" class="card-img-top" >
    <h2>${pokeObj[index].name}</h2>
  </div>
</div>
`
}