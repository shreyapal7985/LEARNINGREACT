import React, { useEffect, useState } from "react";
import {Text,Button,View, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";
const Header=()=>{
    const cartData = useSelector((state)=>state.reducer);
    const [cartitems,setCartitems]=useState(0);

    useEffect(() => {
        setCartitems(cartData.length)
    },[cartData])
    return(
    <View style={styles.box} >
        <Text style={{fontSize:60}}>{cartitems}</Text>
    </View>
)}
 const styles=StyleSheet.create(
    {
        box:{
        height:80,
        backgroundColor:'grey',
        alignItems:'flex-end'
    }
    }
 )
export default Header;