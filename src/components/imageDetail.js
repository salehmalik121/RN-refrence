import React from 'react'
import {Text , StyleSheet , Image , View } from 'react-native'

const ImageDetails = ({imageSource,title,score})=>{
    return(
        
        <View style={style.images}>
        <Image source={imageSource}/>
        <Text style={style.text}>{title}</Text>
        <Text>Score: {score}</Text>
        </View>
        

    )
}
const style = StyleSheet.create({
    images : {
        alignItems:'center',
        marginVertical:10
    },
    text:{
        fontSize:20,
        color:"indigo"
    }
})
export default ImageDetails;