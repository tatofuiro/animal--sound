// ♡ adds the cute mouse ~fairy dust~ ♡
new cursoreffects.fairyDustCursor();

let animals = document.querySelectorAll(".animal");

function tocaSom(audio) {
  const elemento = document.querySelector(audio);
      elemento.play();
}

for(let i = 0; i < animals.length; i++) {
  const animal = animals[i]; console.log(animal); // pega a caixa
  const som = animal.classList[1]; console.log(som); // pega a id definida do animal
  const faz = `#${som}`; console.log(faz); // coloca a # para formar a id

  animal.onclick = function () {
    tocaSom(faz);
  };
}
