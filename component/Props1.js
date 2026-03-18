//Props is used as a parameter or argument for components with the help of props component can share data from one component to another
//with the help of props The information which hold by state can also be transferred

import React, {useState} from "react";
import {Text, View, Button, } from 'react-native';

const Props1 = () => {
      
    const [name,setName] = useState("Shreya");
    return(
        <View>
            <Text style={{fontSize:25}}>Concept of Props</Text>
            <Button title="props check me" color={'pink'} onPress={()=>setName('Abhishek')}></Button>
            <UserDetail name={name} age={23}/>

        </View>
    );
};
 
const UserDetail = (props) => {
    return(
        <View>
            <Text style={{fontSize:23}}>{props.name}</Text>
            <Text style={{fontSize:23}}>{props.age}</Text>
        </View>
    )

}
 export default Props1;
