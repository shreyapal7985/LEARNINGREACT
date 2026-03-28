//"!name" mtlb jb ye condition true hogi tbhi run hogi means string is empty null invalid
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
const App2 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const saveApi = async () => {
        {!name?setNameError(true):setNameError(false)}{/* this is also way to apply the condition with the use of ternary operator*/}
        if(!age){
            setAgeError(true)
        }
        else{
            setAgeError(false)
        }
        if(!name||!age){
            return false
        }
        
        
        alert("next");
        const url = 'http://10.239.150.152:3000/users';
        let result = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age })
        }
        )
        result = await result.json();
        if (result) {
            alert("data added")
        }

    }
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Post Api Call With Input Fields and also with validation</Text>
            <TextInput placeholder="Enter your name" style={styles.input} onChangeText={(text) => setName(text)} />
            {
                nameError ? <Text style={styles.error}>please enter a valid name</Text> : null
            }
            <TextInput placeholder="Enter your age" style={styles.input} onChangeText={(text) => setAge(text)} />
            {
                ageError ? <Text style={styles.error}>please enter a valid age</Text> : null
            }

            <Button title="save data" onPress={saveApi} />

        </View>
    )
}
const styles = StyleSheet.create(
    {
        main: {
            marginTop: 40,
        },
        text: {
            color: 'white',

            fontSize: 25
        },
        input: {
            borderColor: 'grey',
            borderWidth: 1,
            fontSize: 20,
            margin: 20,
            marginBottom:5
        },
        error:{
            marginLeft:20,
            fontSize:20,
            color:'red'
        }
    }
)
export default App2;