import { combineReducers } from "redux";
import handleWishlist from "./WishlistReducer";
import handleCart from "./CartReducer";

const rootReducer = combineReducers({
  handleCart,
  handleWishlist,
})

export default rootReducer;