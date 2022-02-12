// TODO: Make theme-Changer using hooks and call-back funtion 
import React , {useState} from 'react';
import { StyleSheet , Text , View } from 'react-native';
import ThemeToogleButton from '../components/ThemeToogleButton';
const backgroundColorSelector = (props) =>{
    if(props.isEnable === true){
        return `rgb(13,13,13)`
    }else{
        return `rgb(255,255,255)`
    }
}
const ThemeChanger = ()=>{
    const [isEnable , setIsEnable] = useState(false);
    console.log(backgroundColorSelector({isEnable}));
    return (
        <View style={{flex: 1 , backgroundColor: backgroundColorSelector({isEnable})}} >
         
        <ThemeToogleButton 
            onChanged = {()=>{isEnable === false ? setIsEnable(true) : setIsEnable(false)}}
            isEnablePass = {isEnable}
        />
        </View>
    )
}
const style = StyleSheet.create({
    box : {
    
        
    },
})
export default ThemeChanger;