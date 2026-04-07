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
import Header from './component/Header';
import Products from './component/Products';


const App = () => {
  
   return(
<View style={{flex:1}}>
  
<Header/>
<Products/>
</View>
    
  );
};
export default App;

