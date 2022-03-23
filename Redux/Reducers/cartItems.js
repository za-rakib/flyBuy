export const cartItem = (state = [], { type, payload }) => {
    // console.log("cartItem, ", type, payload);
  switch (type) {
    case "ADD_TO_CART":
      return [...state, payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item !== payload);
    case "CLEAR_CART":
      return (state = []);
  }
  return state;
};


// export const addCartItem = (state = [], { type, payload }) => {
//     switch (type) {
//       case "ADD_TO_CART":
//         return [...state, payload];
//       default:
//         return state;
//     }
//   };

// export const removeCartItem = (state = [], { type, payload }) => {
//     console.log("removeCartItem",state,  payload);
//   switch (type) {
//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item !== payload);
//     default:
//       return state;
//   }
// };




// export const clearCart = (state = [], { type, payload }) => {
//   switch (type) {
//     case "RESET":
//       return (state.length = 0);
//     default:
//       return state;
//   }
// };


