//nome = document.querySelector(".nome");
let osso = document.querySelector(".audio");

let cow = document.querySelector(".cow");
let bat = document.querySelector(".bat");
let cat = document.querySelector(".cat");
let pig = document.querySelector(".pig");
let rat = document.querySelector(".rat");
let sheep = document.querySelector(".sheep");
let rabbit = document.querySelector(".rabbit");
let elephant = document.querySelector(".elephant");
let dog = document.querySelector(".dog");
let rooster = document.querySelector(".rooster");
let dinosaur = document.querySelector(".dinosaur");
let owl = document.querySelector(".owl");

let box_animal = document.querySelector(".animal")

cat.addEventListener("click", function () {
  //nome.innerHTML = 'AAAAAAAAAAAA';
  osso.innerHTML = '<audio autoplay src="assets/sound/cat.mp3" type="audio/mp3"></audio>'

  // TO·DO: highlight nos cards selecionados
  // problema atual: não importa qual card é selecionado,
  // a mudança somente ocorre no primeiro. mesmo que ele
  // não tenha a configuração.
  
  // box_animal.style.border = "4px solid white"
})

bat.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/bat.mp3" type="audio/mp3"></audio>'
})

cow.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/cow.mp3" type="audio/mp3"></audio>'
})

pig.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/pig.mp3" type="audio/mp3"></audio>'
})

rat.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/rat.mp3" type="audio/mp3"></audio>'
})

sheep.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/sheep.mp3" type="audio/mp3"></audio>'
})

rabbit.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/rabbit.mp3" type="audio/mp3"></audio>'
})

elephant.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/elephant.mp3" type="audio/mp3"></audio>'
})

dog.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/dog.mp3" type="audio/mp3"></audio>'
})

rooster.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/rooster.mp3" type="audio/mp3"></audio>'
})

dinosaur.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/dinosaur.mp3" type="audio/mp3"></audio>'
})

owl.addEventListener("click", function () {
  osso.innerHTML = '<audio autoplay src="assets/sound/owl.mp3" type="audio/mp3"></audio>'
})
