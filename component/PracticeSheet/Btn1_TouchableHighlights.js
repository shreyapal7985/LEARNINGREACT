import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
const App2 = () => {
    return (
        <View >
            <TouchableHighlight>
                <Text style={styles.btn}> Primary  </Text>
            </TouchableHighlight>
            
            <TouchableHighlight>
                <Text style={[styles.btn, styles.success]}> Successs  </Text>
            </TouchableHighlight>

            
            <TouchableHighlight>
                <Text style={[styles.btn,styles.err]}> Error </Text>
            </TouchableHighlight>
            
            <TouchableHighlight>
                <Text style={styles.btn}> Primary  </Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        btn: {
            fontSize: 20,
            padding: 12,
            color: 'white',
            backgroundColor:"green",
            textAlign:'center',
            margin:25,
            borderRadius:10,
            shadowColor:'red',
            elevation:20,
            shadowOpacity:0.5
        },
        err:{
            backgroundColor:"red"
        },
        success:{
            backgroundColor:'gold'
        }
    }
)
export default App2;