import React , {useState} from 'react';
import {View , StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorCounterScreen = ()=>{
    const [Red , setRed] = useState(100);
    const [Green , setGreen] = useState(100);
    const [Blue , setBlue] = useState(100);
    const colorIncriment = 20;
    const rgbCheck = (color , change)=>{
        switch (color){
            case 'Red':
                Red + change > 255 || Red - change < 0 ? null : setRed(Red + change);
                return;
            case 'Green':
                Green + change > 255 || Green - change < 0 ? null : setRed(Green + change);
                return;
            case 'Blue':
                Blue + change > 255 || Blue - change < 0 ? null : setRed(Blue + change);
                return;

        }
    }
    return (
        <View>
            <ColorCounter 
            onIncrease = {()=>rgbCheck('Red' , colorIncriment)}
            onDecrease = {()=>rgbCheck('Red' , -1*colorIncriment)}
            title = "Red"/>
            <ColorCounter 
            onIncrease = {()=>setGreen(Green+colorIncriment)}
            onDecrease = {()=>setGreen(Green-colorIncriment)}
            title = "Green"/>
            <ColorCounter
            onIncrease = {()=>setBlue(Blue+colorIncriment)}
            onDecrease = {()=>setBlue(Blue-colorIncriment)}
            title = "blue" />
            <View  style={{width:100 , height:100 , backgroundColor : `rgb(${Red},${Green},${Blue})` }} />
        </View> 
    )
}

const style = StyleSheet.create({

})
export default ColorCounterScreen;