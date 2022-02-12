import React , {useReducer} from 'react';
import {View , StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state , action)=>{
    switch (action.valueTobeChanged) {
        case 'Red':
            return   state.Red + action.amountTobeChnaged > 255 || state.Red + action.amountTobeChnaged < 0 ?
            state : {...state , Red : state.Red + action.amountTobeChnaged};
        case 'Green':
            return   state.Green + action.amountTobeChnaged > 255 || state.Green + action.amountTobeChnaged < 0 ?
            state : {...state , Green : state.Green + action.amountTobeChnaged};
        case 'Blue':
        return   state.Blue + action.amountTobeChnaged > 255 || state.Blue + action.amountTobeChnaged < 0 ?
            state : {...state , Blue : state.Blue + action.amountTobeChnaged};
    }
}
const ColorCounterScreen = ()=>{
   const [state , Dispatch] = useReducer(reducer , {Red:0 , Green : 0 , Blue : 0})
   const {Red , Green , Blue} = state;
   const rgb = `rgb(${Red} , ${Green} , ${Blue})`;
   console.log({rgb});
   const change = 15;
    return (
        <View>
            <ColorCounter 
            onIncrease = {()=> Dispatch({valueTobeChanged: "Red" , amountTobeChnaged : change})}
            onDecrease = {()=> Dispatch({valueTobeChanged: "Red" , amountTobeChnaged : -1*change})}
            title = "Red"/>
            <ColorCounter 
            onIncrease = {()=>Dispatch({valueTobeChanged: "Green" , amountTobeChnaged : change})}
            onDecrease = {()=>{Dispatch({valueTobeChanged: "Green" , amountTobeChnaged : -1* change})}}
            title = "Green"/>
            <ColorCounter
            onIncrease = {()=>Dispatch({valueTobeChanged: "Blue" , amountTobeChnaged : change})}
            onDecrease = {()=>Dispatch({valueTobeChanged: "Blue" , amountTobeChnaged : -1 *change})}
            title = "blue" />
            <View  style={{width:100 , height:100 , backgroundColor : rgb }} />
        </View> 
    )
}

const style = StyleSheet.create({

})
export default ColorCounterScreen;