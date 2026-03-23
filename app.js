const buttonsCircle = document.querySelectorAll(".btn__circle");
const ratingNumber = document.querySelector("#selected-rating");
const btnSubmit = document.querySelector(".btn__submit");
// console.log(buttonsCircle, ratingNumber, btnSubmit);
const frontComponent = document.querySelector(".front__component");
const backComponent = document.querySelector(".back__component");

// 1. Логика выбора оценки
buttonsCircle.forEach((buttonCircle) => {
  buttonCircle.addEventListener("click", (event) => {
    // console.log(123);
    // console.log(event.target.textContent);
    // console.log();

    // Удаляем выделение у предыдущей кнопки
    const colors = document.querySelector(".grey");
    // const currentActive = document.querySelector(".grey");
    if (colors) {
      colors.classList.remove("grey");
    }
    // Добавляем выделение текущей и записываем значение

    const rating = event.target.innerText;
    buttonCircle.classList.add("grey");
    ratingNumber.innerText = rating;
    // buttonCircle.classList.add("grey");
    // ratingNumber.innerText = event.target.innerText;
  });

  // 2. Логика отправки (вынесена из цикла)
  btnSubmit.addEventListener("click", () => {
    // Проверяем, выбрана ли оценка (есть ли кнопка с классом grey)
    if (document.querySelector(".grey")) {
      frontComponent.classList.add("active");
      backComponent.classList.remove("active");
    } else {
      //   frontComponent.classList.remove("active");
      //   backComponent.classList.add("active");
      alert("Please select a rating!");
    }
  });
});

// Если произошел клик по кругу и сделан выбор - открывется новая страница,
// фрон - добавляестя дисплей ноне - бэк - добавлялется дисплей блок
// то есть через класс - актив

// Возвращение изначаельного компонента при нажатии на клавиатуре кнопки Esc
window.addEventListener("keydown", (event) => {
  // проверяем какая кнопка на клавиатуре нажата
  if (event.key == "Escape") {
    frontComponent.classList.remove("active");
    backComponent.classList.add("active");

    // Опционально: сбросить выбранный рейтинг при закрытии
    const currentActive = document.querySelector(".grey");
    if (currentActive) {
      currentActive.classList.remove("grey");
    }
  }
});

// Возврат при клике вне блока (по фону)
window.addEventListener("click", (event) => {
  const card = document.querySelector("article");

  // Проверяем: кликнули ли мы МИМО карточки?
  //   !card.contains(event.target) — если цель клика не находится внутри card
  if (!card.contains(event.target)) {
    frontComponent.classList.remove("active");
    backComponent.classList.add("active");

    // Опционально: сбросить выбранный рейтинг при закрытии
    const currentActive = document.querySelector(".grey");
    if (currentActive) {
      currentActive.classList.remove("grey");
    }
  }
});
