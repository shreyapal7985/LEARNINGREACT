import React, {Component} from "react";
import { View, Text, } from "react-native";
class Student extends Component{
    render(){
    
        return(
            <View>
                <Text style={{fontSize:20,color:'red'}}>Student Name:{this.props.name}</Text> 
            </View>
        )
    }
 }
 export default Student;