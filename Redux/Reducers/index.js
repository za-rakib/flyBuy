import { combineReducers } from "redux";
import { cartItem, addCartItem, removeCartItem, clearCart } from "./cartItems";
const reducers = combineReducers({
     cartItem: cartItem,
//   addCartItem: addCartItem,
//  removeCartItem: removeCartItem,
//   clearCartItem: clearCart,
});
export default reducers;
