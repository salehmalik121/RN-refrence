import React , {useState} from 'react';
import {StyleSheet , Text , View , TextInput} from 'react-native';

const TextScreen =()=>{
    const [name , setName] = useState('');
    return (
        <View>
           <TextInput style = {style.textInput} 
                autoCapitalize = 'none'
                autoCorrect = {false}
                value = {name}
                onChangeText ={(Value)=> setName(Value) }
          />
          <Text>
              {name}
          </Text>
        </View>
    )
}
const style = StyleSheet.create({
    textInput : {
        margin : 20,
        borderColor : 'indigo',
        borderWidth : 1,
        height : 50,
        borderRadius : 10,
        backgroundColor : 'white'
    }
})
export default TextScreen;