import { createStore } from "redux";
import "./styles.css";
// counter with vanilla js

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const incrementOdd = document.getElementById("incrementOdd");
const incrementAsync = document.getElementById("incrementAsync");

let initialState = {
  val: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, val: (state.val += 1) };
    case "decrement":
      return { ...state, val: state.val === 0 ? 0 : (state.val -= 1) };
    case "incrementOdd":
      return {
        ...state,
        val: state.val % 2 !== 0 ? state.val : (state.val += 1)
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const getReduxInitialState = () => {
  counter.innerHTML = store.getState().val;
};
getReduxInitialState();

store.subscribe(getReduxInitialState);

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});

incrementOdd.addEventListener("click", () => {
  store.dispatch({ type: "incrementOdd" });
});
incrementAsync.addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch({ type: "increment" });
  }, 1000);
});
