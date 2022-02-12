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
            <Text style = {{fontSize: 20 , color: TextColorSelector({isEnablePass}) , fontWeight:'500' , fontFamily:'Helvetica Neue' , marginTop : 5}}> Dark Theme</Text>
            <Switch 
                onValueChange = {()=>{onChanged()}}
                value = {isEnablePass}
            />
        </View>
    )
    
}
const bool = true;
const style = StyleSheet.create({
    box : {
        borderRadius : 30,
        marginBottom: 530,
        backgroundColor : bool? '#FCA311' : 'grey',
        flex:1 ,
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin: 10,
        padding :15,
    },
})
export default ThemeToogleButton;