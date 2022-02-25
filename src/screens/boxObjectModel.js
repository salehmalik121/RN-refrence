import React from 'react';
import {StyleSheet , Text , View} from 'react-native';
const boxObjectModel = ()=>{
    return(
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>
                child 1
            </Text>
            <Text style={style.textTwoStyle}>
                child 2
            </Text>
            <Text style={style.textThreeStyle}>
                child 3
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    viewStyle : {
        height:300,
        borderWidth: 5,
        borderColor: 'black',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textOneStyle : {
        borderColor: 'red',
        borderWidth: 1,
        height:80,
        width:80,
       },
    textTwoStyle : {
        borderColor: 'red',
        borderWidth: 1,
        height:80,
        width:80,
        alignSelf:'center',
       },
    textThreeStyle : {
        borderColor: 'red',
        borderWidth: 1,
        height:80,
        width:80,
       }
})
export default boxObjectModel;