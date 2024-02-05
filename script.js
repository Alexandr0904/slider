let img = document.querySelector(".slider__img");
let btnLeft = document.querySelector(".left");
let btnRight = document.querySelector(".right");
let minPage = document.querySelector(".min__page");
let maxPage = document.querySelector(".max__page");
let text = document.querySelector(".slider__text");

let dots = document.querySelectorAll(".dot"); // Позволяет достать из HTML все элементы с указанным классом в виде массива

let arrText = ["mountains", "beutiful view", "riwer"];
let arrImg = ["./img1.jpeg", "./img2.jpg", "./img3.jpg"];

let index = 0;
update();
// Заносим максимальный номер страници
maxPage.innerHTML = arrImg.length;
// Обрабатывем клик вправо
btnRight.onclick = right;
function right() {
  if (index < arrImg.length - 1) {
    index++;
  } else {
    index = 0;
  }
  update();
}
// Обработка клик влево
btnLeft.onclick = left;
function left() {
  if (index > 0) {
    index--;
  } else {
    index = arrImg.length - 1;
  }
  update();
}
// Функция смены данных
function update() {
  // Заносим ссылку на изображение через атрибут src
  img.src = arrImg[index];
  // Заносим текст в div
  text.innerHTML = arrText[index];
  // Заносим  номер текущую страницу
  minPage.innerHTML = index + 1;
  //? Выделяем текущую страницу
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
}
// let numbers = [1, 2, 3];
// for (let i = 0; i < numbers.length; i++) { // Проходимся по каждому элементу масссива
//   alert(numbers[i]);
//
