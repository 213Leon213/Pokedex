
function pokeTemplate(index) {
    return `<div class="card margin-10 text-nowrap-center bg-danger text-light" style="width: 12rem;">
    <h2>${pokeObj[index].name}</h2>
  <img src="${pokeObj[index].sprites.other.home.front_default}" class="card-img-top ${getBgColor(index)}" alt="...">
  <div class="card-body column">
    <img src="${addPicture0(index)}" class="card-img-top" >
    <img src="${addPicture1(index)}" class="card-img-top" >
  </div>
</div>
`
}