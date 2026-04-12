/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  Button,
  ScrollView,
  View,
  Image,


} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import App2 from './component/PracticeSheet/D_Modal';


const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>


      <App2 />
    </SafeAreaView>

  );
};
export default App;

