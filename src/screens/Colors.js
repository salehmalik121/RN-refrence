import React ,{useState} from 'react';
import {Button , StyleSheet , View , FlatList} from 'react-native';
import ColorsDisplay from '../components/colorsDisplay';

const ColorsScreen = ()=>{
    const [Colors , setColors] = useState([]);
    return (
        <View>
        <Button title='Add a Color' onPress={()=>{
            setColors([...Colors , randomColorGen()]);
        }} />
        <ColorsDisplay List = {Colors} name = "saleh"/>
        
        </View>
        
    )
}
const randomColorGen = ()=>{
    const Red = Math.ceil(Math.random()*255)
    const Green = Math.ceil(Math.random()*255)
    const Blue = Math.ceil(Math.random()*255)
    return `rgb(${Red} , ${Green} , ${Blue})`
}
const style = StyleSheet.create({

})
export default ColorsScreen;