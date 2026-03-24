const buttonsCircle = document.querySelectorAll(".btn__circle");
const ratingNumber = document.querySelector("#selected-rating");
const btnSubmit = document.querySelector(".btn__submit");
// console.log(buttonsCircle, ratingNumber, btnSubmit);
const frontComponent = document.querySelector(".front__component");
const backComponent = document.querySelector(".back__component");

buttonsCircle.forEach((buttonCircle) => {
  buttonCircle.addEventListener("click", (event) => {

    const colors = document.querySelector(".grey");
    // const currentActive = document.querySelector(".grey");
    if (colors) {
      colors.classList.remove("grey");
    }

    const rating = event.target.innerText;
    buttonCircle.classList.add("grey");
    ratingNumber.innerText = rating;
  });

  btnSubmit.addEventListener("click", () => {
    if (document.querySelector(".grey")) {
      frontComponent.classList.add("active");
      backComponent.classList.remove("active");
    } else {
      alert("Please select a rating!");
    }
  });
});


window.addEventListener("keydown", (event) => {

  if (event.key == "Escape") {
    frontComponent.classList.remove("active");
    backComponent.classList.add("active");


    const currentActive = document.querySelector(".grey");
    if (currentActive) {
      currentActive.classList.remove("grey");
    }
  }
});


window.addEventListener("click", (event) => {
  const card = document.querySelector("article");

  if (!card.contains(event.target)) {
    frontComponent.classList.remove("active");
    backComponent.classList.add("active");

    const currentActive = document.querySelector(".grey");
    if (currentActive) {
      currentActive.classList.remove("grey");
    }
  }
});
