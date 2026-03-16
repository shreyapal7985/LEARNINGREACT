//state is the feature of react js for using it on React-Native we internally import the {useState}
//State is used for holding the information of component like variable holds the value
//State declarion in one component can not be used by other component but we can declare the State of same name in another component but not the information or value it treated differently 
//whenever use id declare before any word it recommend aas Hook like {useState} and State can never be shared which i also mentioned in above line

import React, { useState } from 'react';
import { Text, View, Button, } from 'react-native';

const State = () => {
    const [name, setName] = useState("Anil");// here setname is behaving like a function
    function testname() {
        setName("Shreya")
    }

     const [age, newage] = useState(23);
     function fetchAge() {
        newage(20)
     }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Learning of State</Text>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <Button title='State Benefits' onPress={testname} color={'brown'}></Button>
            <Text style={{fontSize:21}}>{age}</Text>
            <Button title='State 2 Benefits' onPress={fetchAge} color={'grey'}></Button>
        </View>

    );
};

export default State;