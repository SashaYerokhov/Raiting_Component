const buttonsCircle = document.querySelectorAll(".btn__circle");
const ratingNumber = document.querySelector("span");
const btnSubmit = document.querySelector(".btn__submit");
// console.log(buttonsCircle, ratingNumber, btnSubmit);
const frontComponent = document.querySelector('.front__component');
const backComponent = document.querySelector('.back__component');


buttonsCircle.forEach(buttonCircle => {
    buttonCircle.addEventListener('click', (event) => {
        // console.log(123);
        // console.log(event.target.textContent);
        

        
    })
    btnSubmit.addEventListener('click', () => {
        if() {

        }
    })
})

// Если произошел клик по кругу и сделан выбор - открывется новая страница,
// фрон - добавляестя дисплей ноне - бэк - добавлялется дисплей блок
// то есть через класс - актив