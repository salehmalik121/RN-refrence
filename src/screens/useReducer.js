import React , {useReducer} from 'react';
import {StyleSheet , View , Text , TextInput } from 'react-native';
const reducer = (state , action)=>{

    switch (action.InputValueType){
        case 'name' : 
        return {...state ,  name : action.valueInput} ;
        case 'Password':
        return {...state , Password : action.valueInput};
    }
}
const ValidScreen = ()=>{
    const [state , Dispatch] = useReducer(reducer , {name : '' , Password : ''})
    return (
        <View>
        <Text style={{marginTop : 10 , marginLeft : 20 , fontWeight : 'bold'}}>
                Enter User name
            </Text>
             <TextInput 
                style={style.TextInputStyle} 
                value = {state.name}
                onChangeText = {(value)=>{
                    Dispatch ({InputValueType : 'name' , valueInput : {value}})
                }} />
             <Text style={{marginTop : 10 , marginLeft : 20 , fontWeight : 'bold'}}>
                Enter Password
            </Text>
             <TextInput 
                secureTextEntry = {true}
                style={style.TextInputStyle} 
                value = {state.Password}
                onChangeText = {(value)=>{
                    Dispatch({InputValueType : 'Password'  , valueInput : {value}})
                }} />
            {
                state.Password.value.length > 5 ? null :  <Text style = {style.ErrorStyle}>Password length should be greater then 5</Text> 
            }
        </View>
    )
}
const style = StyleSheet.create({
    TextInputStyle :{
        padding : 5,
        height : 50,
        marginTop : 5,
        marginBottom: 5,
        margin : 20,
        borderColor : 'indigo',
        borderWidth : 2,
        borderTopLeftRadius : 10,
        borderBottomStartRadius : 0,
        borderRadius : 10,
    },
    ErrorStyle : {
        textAlign : 'center',
        color : 'red'
    }
})
export default ValidScreen;