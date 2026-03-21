import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const RadioBtn = () => {
    const skills = [{ id: 1, name: 'react' }, { id: 2, name: 'php' }, { id: 3, name: 'c' }, { id: 4, name: 'java' }]
    const [radio, setRadio] = useState(0);
    return (<View style={styles.main}>{
        skills.map((item) => <TouchableOpacity
            key={item.id}
            onPress={() => setRadio(item.id)}>
            <View style={styles.wrapper}><View style={styles.radio}>{radio === item.id ? <View style={styles.radioBg}></View> : null} </View><Text style={styles.radiobox}>{item.name}</Text></View>
        </TouchableOpacity>)
    }

    </View>
    )
}
const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
            
        },
        radiobox: {
            color: 'white',
            marginLeft: 15,
            fontSize: 16
        },
        radio: {
            height: 40,
            width: 40,
            borderWidth: 5,
            borderColor: 'white',
            borderRadius: 20,
        },
        wrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            width:100,
            margin: 10,

        },
        radioBg: {
            height: 20,
            width: 20,
            backgroundColor: 'red',
            borderRadius: 10,
            margin: 5,
            alignItems: 'center',

        },

    }
)
export default RadioBtn;