import React from "react";
import {Text,Button,View,Image, ScrollView} from 'react-native';

import { useDispatch } from 'react-redux'; //useDispatch is a hook of react redux which is used to call the function declare in action file

import { addToCart} from './Redux/action';


const Product=(props)=>{
    const item=props.item;
    const dispatch=useDispatch(); //storing usedispatch hoon in variable dispatch

const handleAddToCart=(item)=>{
    dispatch(addToCart(item))// call the addtocart function daclare in action.js file

}

    return(
    <View>
    
            <Text>{item.name}</Text>
            <Text>{item.cost}</Text>
            <Image  style={{height:400,width:180}} source={item.image}/>
            <Button title="add to cart" onPress={()=>handleAddToCart(item)}/>
            
            </View>
)}
export default Product;