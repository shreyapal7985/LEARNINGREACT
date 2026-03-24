//WebView is used to open the website on the app
//For WebView first we have to install the library "npm install react-native-webview" for once we have to do this
//After we have to run the command "npx react-native run-android"
import React from "react";
import {View,Text,Button} from 'react-native';
import {WebView} from 'react-native-webview';
const Website = ()=>{
    return(
        <WebView source={{uri:'https://reactnative.dev/'}}/>
    )
}
export default Website;;