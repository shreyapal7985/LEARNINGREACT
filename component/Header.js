import React, { useEffect, useState } from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
const Header = ()=>{
    const cartData =useSelector((state)=>state.reducer)//{/*for getting the data we use the hook useSelector from reacgt-redux*/}
    
    const [cartItems,setCartitems]=useState(0);
    useEffect(()=>{
setCartitems(cartData.length)
    },[cartData]) //{/*jb jb carData ki value update hogi tb tb useEffect run hoga */}
    return(
        <View style={styles.main}>
           <Text style={styles.text}>
            <View style={styles.main_second}>
                <Text style={{fontSize:25,textAlign:"center"}}>{cartItems}</Text>
            </View>
           </Text>
           </View>
        
    )
}

const styles=StyleSheet.create(
    {
        main:{
            marginTop:40,
            backgroundColor:'grey',
            
        },
    main_second:{
backgroundColor:"yellow",
borderRadius:20,
width:40,
height:40
    },
        text:{
            color:'white',
            fontSize:20,
            textAlign:'right',
            padding:10
            
        }
    }
)
export default Header;