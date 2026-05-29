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

import Header from './component/PracticeSheet/R_Header';
import Product from './component/PracticeSheet/R1_Product';




const App = () => {
  const list=[
    {
      name:'samsung',
      cost:22000,
      image:require('./component/image/img.png')

    },
    {
      name:'Nokia',
      cost:30000,
      image:require('./component/image/img.png')
    },
    {
      name:'oppo',
      cost:50000,
      image:require('./component/image/img.png')
    }
  ]

  return (
    <SafeAreaView style={{flex:1}}>
      <Header />
      <ScrollView>      {
      list.map((item)=> <Product item={item}/>)
      }</ScrollView>


      
      
    </SafeAreaView >

  );
};
export default App;

