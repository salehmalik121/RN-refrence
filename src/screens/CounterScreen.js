import React ,{useReducer} from 'react';
import {Text, StyleSheet , View , Button, Pressable , TouchableOpacity} from 'react-native';
import {Ionicons , AntDesign } from '@expo/vector-icons';

    const reducer =(state , action) =>{
        switch (action.wayInValueChange){
            case 'Increase' :
                return {...state , value : state.value + action.amountValueTobeChanged}
            case "Decrease" : 
                return {...state , value : state.value - action.amountValueTobeChanged}
            default : 
                return state;
        }
    }
const CounterScreen = ()=>{
    const [state , Dispatch] = useReducer(reducer , {value:0})
    return (
        <View style = {style.mainStyle}>
            <View >
                <Text style={style.counterText} >
                    {state.value}
                </Text>
            </View>
           <View style={style.view}>
               <TouchableOpacity 
                    onPress={()=>{
                        Dispatch({wayInValueChange : "Increase" , amountValueTobeChanged : 1})
                    }}
               >
                <AntDesign name="pluscircleo" size={40} color="indigo" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{
                    Dispatch({wayInValueChange:"Decrease" , amountValueTobeChanged: 1})
                }}
            >
                <AntDesign name="minuscircleo" size={40} color="indigo" />
            </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    mainStyle:{
        flex : 1,
    },
    counterText:{
        textAlign :"center",
        fontSize : 60,
        fontWeight:'bold'
    },
    view:{
        flex:1,
        flexDirection : 'row',
        justifyContent : "space-evenly"
    }
})

export default CounterScreen;