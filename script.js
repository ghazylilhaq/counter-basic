const numberTotal = document.querySelector("#number-total");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

let number = 0;


const color = function () {
  if (number > 0) {
    numberTotal.style.color = "green";
  } else if (number < 0 ){
    numberTotal.style.color = "red";
  } else {
    numberTotal.style.color = "DimGray";
  }
};

const input = function () {
  console.log(number);
  numberTotal.textContent = number;
  color ();
};



decreaseBtn.addEventListener("click", function () {
  number--;
  input();
});

increaseBtn.addEventListener("click", function () {
  number++;
  input();
});

resetBtn.addEventListener("click", function () {
  number = 0;
  input();
});
