import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
const Welcome = () => {
    const mainTagline = <Text style = {style.HeadingText} >Getting started with React Native!</Text>;
    const name = 'saleh';
    return(
        <View>
            {mainTagline}
            <Text style = {style.subHeadingText}>My name is {name}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    HeadingText: {
        fontSize: 45,
    },
    subHeadingText:{
        fontSize:20,
        fontFamily:'Helvetica'
    }
})
export default Welcome;