import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ImageDeatils from '../components/imageDetail';

const ImageScreen = ()=>{
    return(
        <View>
            <ImageDeatils title = "Beach" imageSource={require('../../assets/beach.jpg')} score ={10}/>
            <ImageDeatils title = "Forest" imageSource={require('../../assets/forest.jpg')} score ={20}/>
            <ImageDeatils title = "Mountain" imageSource={require('../../assets/mountain.jpg')} score ={30}/>
            
        </View>
    )
}
const style= StyleSheet.create({

})

export default ImageScreen;