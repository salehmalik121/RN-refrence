import React , {useState} from 'react';
import { StyleSheet , Text , View } from 'react-native';
import ThemeToogleButton from '../components/ThemeToogleButton';
const backgroundColorSelector = (props) =>{
    if(props.isEnable === true){
        return [`rgb(13,13,13)` , `rgb(255,255,255)`]
    }else{
        return [`rgb(255,255,255)` , `rgb(0,0,0)`]
    }
}
const ThemeChanger = ()=>{
    const [isEnable , setIsEnable] = useState(false);
    console.log(backgroundColorSelector({isEnable}));
    return (
        <View style={{flex: 1 , backgroundColor: backgroundColorSelector({isEnable})[0]}} >
         
        <ThemeToogleButton 
            onChanged = {()=>{isEnable === false ? setIsEnable(true) : setIsEnable(false)}}
            isEnablePass = {isEnable}
        />
        </View>
    )
}
const style = StyleSheet.create({
    text : {
        
    }
})
export default ThemeChanger;