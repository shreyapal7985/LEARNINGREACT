import React, { useEffect, useState } from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
const Header = ()=>{
    return(
        <View style={{marginTop:40, backgroundColor:"grey"}}>
            <Text>
                0
            </Text>
        </View>
    )
}

export default Header;