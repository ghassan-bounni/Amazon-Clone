import { createStore } from "redux";

const initialState = {
  Basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOBASKET":
      return Object.assign({}, state, {
        Basket: [...state.Basket, action.item],
      });

    case "REMOVE":
      let newBasket = [...state.Basket];
      newBasket.splice(action.index, 1);

      return Object.assign({}, state, {
        Basket: newBasket,
      });

    case "SET-USER":
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
