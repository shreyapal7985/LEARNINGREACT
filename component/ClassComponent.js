//in class component render function is predefine function for returning something
//in class component we pass the value with this keyword for button onpress attribute
// we define the class component using the extends Component just like inheritance in other programming language
// here Component is which declare after the extends keyword is treated like parent calss

import React, {Component} from "react";
import { View, Text, Button } from "react-native";
 class Apps extends Component{
    fruit = ()=>{
        alert("hello")
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:20, color:'white'}}>Class component in react navive is kind of siliar to defining class in obeject oriented programming language</Text>
                <Button title="press me" onPress={this.fruit}></Button>
            </View>
        )
    }
 }
 export default Apps;