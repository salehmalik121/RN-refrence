import React , {useState} from 'react';
import Slider  from '@react-native-community/slider';   
import { View , StyleSheet , Text } from 'react-native';
const SliderScreen = ()=>{
    const [redValue , setRedValue] = useState(0);
    const [greenValue , setGreenValue] = useState(0);
    const [blueValue , setBlueValue] = useState(0);
    return (
        <View>
            <Text> RED </Text>
            <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={255}
                change = {1}
                minimumTrackTintColor="#B22222"
                maximumTrackTintColor="#ffffff"
                onValueChange = {value => setRedValue(Math.ceil(value))}
            />
            <Text> GREEN </Text>
            <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor="#32CD32"
                maximumTrackTintColor="#FFFFFF"
                onValueChange = {value => setGreenValue(Math.ceil(value))}
            />
             <Text> BLUE </Text>
            <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={255}
                minimumTrackTintColor= "#4169E1"
                maximumTrackTintColor="#ffffff"
                onValueChange = {value => setBlueValue(Math.ceil(value))}
             
            />
            <View style = {{height : 100 , width :100 , backgroundColor  : `rgb(${redValue} , ${greenValue} , ${blueValue})`}} />
        </View>
    )
}
const style = StyleSheet.create({
 
})
export default SliderScreen;