import React from 'react';
import {View,Button,Text,StyleSheet, Image,ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';{/*it is used for calling the function addtocart*/}
import {addToCart} from './redux/action';
const Product = ()=>{
    const dispatch=useDispatch();{/*yha pr useDispatch Hook ko variable ke andr assign kiya gya h*/}
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

    const handleToCart=(item)=>{
        alert(JSON.stringify(item))
        dispatch(addToCart(item));
    }
    return(
        <ScrollView style={{marginBottom:40}}>
            <Text style={styles.text}>Product</Text>
            {
                products.map((item, index)=><View key={index} style={{alignItems:'center',borderBottomColor:'orange',borderBottomWidth:10,padding:10}}>
                    <Text style={styles.text}>Name:{item.name}</Text>
                    <Text style={styles.text}>Price:{item.price}</Text>
                    <Image source={item.image}
                        style={{width:100, height:200}}
                    />
                    <View style={{marginTop:10}}>
                    <Button title='Add to Cart' onPress={()=>handleToCart(item)}/></View>
                </View>)
            }
        </ScrollView>
    )
}

const styles=StyleSheet.create(
    {
    
        text:{
            color:'white',
            fontSize:20
        }
    }
)

export default Product;