import "./styles.css";
// counter with vanilla js

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const incrementOdd = document.getElementById("incrementOdd");
const incrementAsync = document.getElementById("incrementAsync");

let val = 0;

increment.addEventListener("click", () => {
  counter.innerHTML = val += 1;
});

decrement.addEventListener("click", () => {
  counter.innerHTML = val === 0 ? 0 : (val -= 1);
});

incrementOdd.addEventListener("click", () => {
  counter.innerHTML = val % 2 !== 0 ? (val += 1) : val;
});
incrementAsync.addEventListener("click", () => {
  setTimeout(() => {
    counter.innerHTML = val += 1;
  }, 1000);
});
