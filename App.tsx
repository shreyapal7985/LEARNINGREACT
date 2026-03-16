/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import Company from './component/Company';
import Press from './component/OnPress';
import State from './component/State';
import Props1 from './component/Props';

let name = "garima";
function fruit(){
  return 'apple'
}
const App = () => {
  var age=27
   return(
    <View>
      <Text style={{fontSize:30}}>hello React native</Text>
      <Button title="press here"></Button>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{fruit()}</Text>
      <Text style={{fontSize:30}}>{age === 34?"above age":"unknown age"}</Text>
      
      <UserData />

    </View>
    
  );
};
const UserData = () => {
  return(
    <View>
      <Text style={{fontSize:30}}>name:anil</Text>
      <Text style={{fontSize:30}}>age:56</Text>
      <Text style={{fontSize:30}}>email:anjal@54w426w56gmil.com</Text>
      <Text style={{fontSize:30}}>name:anil</Text>
      <Company/>
      <Press/>
      <State />
      <Props1 />

    </View>
  )
}
export default App;

