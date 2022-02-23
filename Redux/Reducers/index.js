import { combineReducers } from "redux";
import  {cartItem}  from "./cartItems";
const reducers = combineReducers({
  cartItem: cartItem,
});
export default reducers;
