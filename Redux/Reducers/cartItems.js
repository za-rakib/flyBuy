export const cartItem = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, product: payload };
    case "REMOVE_FROM_CART":
      return state.filter((item) => item !== payload);
    case "CLEAR_CART":
      return (state = []);
  }
  return state;
};

// export conIKst addCartItem = (state = [], { type, payload }) => {
//   switch (type) {
//     case "ADD_TO_CART":
//       return [...state, payload];
//     default:
//       return state;
//   }
// };
// export const removeCartItem = (state = [], { type, payload }) => {
//   switch (type) {
//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item !== payload);
//     default:
//       return state;
//   }
// };

// export const clearCart = (state = [], { type, payload }) => {
//   switch (type) {
//     case "CLEAR_CART":
//       return (state = []);
//     default:
//       return state;
//   }
// };
