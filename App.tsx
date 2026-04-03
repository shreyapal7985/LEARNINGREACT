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
  
} from 'react-native';
import Header from './component/Header';
import Product from './component/Product';


const App = () => {
   return(
<View style={{flex:1}}>
  
<Header/>
<Product/>
</View>
    
  );
};
export default App;

