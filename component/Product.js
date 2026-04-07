import React from 'react';
import {View,Button,Text,StyleSheet, Image,ScrollView} from 'react-native';
const Product=(props)=>{
    const item=props.item
    return(
        <View style={{margin:10}}>
            <Text style={{fontSize:25,color:'white'}}>{item.name}</Text>
            <Text style={{fontSize:25,color:'white'}}>{item.price}</Text>
            <Image source={item.image} style={{height:200, width:100}}></Image>
        </View>
    )
}


export default Product;