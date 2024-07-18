export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);


export const initialState = {
  basket: [],
  favoriteBasket: [],
  user: null,
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    // Basket Cases
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const basketIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (basketIndex >= 0) {
        newBasket.splice(basketIndex, 1);
      } else {
        console.warn(
          `can't remove product {id ${action.id} as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    // Favorit Basket Cases
    case "ADD_TO_FAVORITE_BASKET":
      return {
        ...state,
        favoriteBasket: [...state.favoriteBasket, action.item],
      };
    case "EMPTY_FAVORITE_BASKET":
      return {
        ...state,
        favoriteBasket: [],
      };
    case "REMOVE_FROM_FAVORITE_BASKET":
      const favoriteBasketIndex = state.favoriteBasket.findIndex(
        (favoriteBasketItem) => favoriteBasketItem.id === action.id
      );
      let newFavoriteBasket = [...state.favoriteBasket];

      if (favoriteBasketIndex >= 0) {
        newFavoriteBasket.splice(favoriteBasketIndex, 1);
      } else {
        console.warn(
          `can't remove product {id ${action.id} as it's not in favorite basket!`
        );
      }
      return {
        ...state,
        favoriteBasket: newFavoriteBasket,
      };
    default:
      return state;
  }
};

export default AppReducer;
