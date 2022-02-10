//TODO: make child which calls call back funtion to change theme on themeChanger.js
import React from 'react';
import { StyleSheet , Switch, Text , View } from 'react-native';
const TextColorSelector = ({isEnablePass})=>{

    if(isEnablePass === true){
        return `rgb(255,255,255)`
    }else{
        return `rgb(0,0,0)`
    }
}
const ThemeToogleButton = ({onChanged , isEnablePass})=>{
    return (
        <View style = {style.box}>
            <Text style = {{fontSize: 20 , color: TextColorSelector({isEnablePass}) , fontWeight:'bold'}}> Dark Theme</Text>
            <Switch 
                onValueChange = {()=>{onChanged()}}
                value = {isEnablePass}
            />
            
        </View>
        
    )
    
}
const style = StyleSheet.create({
    box : {
        flex:1 ,
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin: 20,
    },
})
export default ThemeToogleButton;