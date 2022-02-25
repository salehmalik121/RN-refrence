import React, {useState}from 'react';
import { StyleSheet , Text , TextInput , View } from 'react-native';
const PasswordValid = ()=>{
    const [Password , setPassword] = useState('');
    const [user , setUser] = useState('');
    return (
        <View>
            <Text style={{marginTop : 10 , marginLeft : 20 , fontWeight : 'bold'}}>
                Enter User
            </Text>
            <TextInput 
                style={style.TextInputStyle} 
                value = {user}
                onChangeText = {(value)=>{
                    setUser(value)
                }}
             />
            <Text style={{marginTop : 10 , marginLeft : 20 , fontWeight : 'bold'}}>
                Enter Password
            </Text>
            <TextInput 
                secureTextEntry = {true}
                style={style.TextInputStyle} 
                value = {Password}
                onChangeText = {(value)=>{
                    setPassword(value)
                }}
             />
             { Password.length < 5 ?  <Text style = {style.ErrorStyle}>Password should be greater then 5 characters</Text>: null}
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
export default PasswordValid;