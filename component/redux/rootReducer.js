//when we multiple reducer one fro addtocart and one for remove from the cart
import { combineReducers } from "redux";
import {reducer} from './reducer';
export default combineReducers(
    {
        reducer
    }
)