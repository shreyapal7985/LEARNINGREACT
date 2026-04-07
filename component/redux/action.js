// ye action file waha import hogi jaha pr "ADD to Cart" button hoga kyunki ussi ke upar hume operation perform krwana h reducer ke through  ex-> product file
//action file reducer ko instruct deti h ki kya action performa krna h
import { ADD_To_Cart } from "./constants";
export function addToCart(item){
    return{
        type:ADD_To_Cart,
        data:item
    }
}
