//reducer hume action perform krke deta ki item ko add krna ya remove aur action file reducer ko btata h kya action perform krna h
import { ADD_To_Cart } from './constants';
const initialState = []; {/*yha pr hum koi bhi variable name le kr uski value empty string,object,array de skte h , pr humne yha pr array isliye use kiya h kyunki humare pass list of prodeuct h*/ }
export const reducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_To_Cart:
        return[
            ...state,
            action.data
        ]
        default:
            return state
}
}
