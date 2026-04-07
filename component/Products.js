import React from "react";
import {View,Text, ScrollView} from 'react-native';
import Product from "./Product";
const Products= ()=>{

 const products=[
        {
            name:'Samsung',
            price:3000,
            image:require('./image/img.png')
            
        },
                {
            name:'Iphone',
            price:13000,
            image:require('./image/img.png')
            
        },
                {
            name:'Oppo',
            price:30000,
            image:require('./image/img.png')
            
        }
    ]
    return(
        <ScrollView style={{marginBottom:40}}>
            {
                products.map((item,index)=><Product item={item}/>)
            }
        </ScrollView>
    )
}
export default Products;