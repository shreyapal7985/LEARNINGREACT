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
  ScrollView,
} from 'react-native';
import Company from './component/Company';
import Press from './component/OnPress';
import State from './component/State';
import Props1 from './component/Props1';
import Internal from './component/InternalCss';
import GetInput from './component/Input';
import Form from './component/Form';
import List from './component/FlatLlist';
import List1 from './component/MapList';
import Grid from './component/Grid';
import AdvanceList from './component/AdvanceFlatList';
import ListSection from './component/SectionList';
import Apps from './component/ClassComponent';
import Apps1 from './component/UsingStatePropsWClassComponent';
import Use from './component/UseEffectHook';

let name = "garima";
function fruit(){
  return 'apple'
}
const App = () => {
  var age=29
   return(
    <ScrollView style={{marginBottom:50}}>
    <View>
      <Text style={{fontSize:30}}>hello React native</Text>
      <Button title="press here"></Button>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{fruit()}</Text>
      <Text style={{fontSize:30}}>{age === 34?"above age":"unknown age"}</Text>
      <List />
      <Form />
      <GetInput />
      <UserData />
      <List1 />
      <Grid />
      <AdvanceList/>
      <ListSection/>
      <Apps/>
      <Apps1/>
      <Use />
      

    </View>
    </ScrollView>
    
  );
};
const UserData = () => {
  return(
    <View>
      <Text style={{fontSize:30}}>name:anil</Text>
      <Text style={{fontSize:30}}>age:89</Text>
      <Text style={{fontSize:30}}>email:anjal@54w426w56gmil.com</Text>
      <Text style={{fontSize:30}}>name:anil</Text>
      <Company/>
      <Internal />
      <Press/>
      <State />
      <Props1 />
      

    </View>
  )
}
export default App;

