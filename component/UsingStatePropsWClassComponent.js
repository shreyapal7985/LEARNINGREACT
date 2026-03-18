// In class component for defining the state we use the constructor Which is the feature of Parent Component and we use super keyword for calling this constructor
//using the property and function of class component we have to use the this keyword
//this.setState is by default function for updating the value of state


import React, {Component} from "react";
import { View, Text, Button, TextInput } from "react-native";
import Student from './Student';
 class Apps1 extends Component{
    constructor(){
        super();
        this.state={
            name:"shreya",
            age:23
        }
    }
    updateName(val){
        this.setState({name:val})
    }
    user(val){
        this.setState({age:val})
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:20, color:'white'}}>Using State and Props in Class Component</Text>
                <Text style={{fontSize:20, color:'white'}}>{this.state.name}{this.state.age}</Text>
                <TextInput placeholder="enter ur name" onChangeText={(text)=>this.updateName(text)}></TextInput>
                <TextInput placeholder="enter ur age" onChangeText={(text)=>this.user(text)}></TextInput>
                <Student name={this.state.name}/>
            </View>
        )
    }
 }
 
 export default Apps1;