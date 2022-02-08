import React from 'react';
import {View , StyleSheet , Text , Button} from 'react-native';

const ColorCounter = ({title , onIncrease , onDecrease})=>{
    return (
        <View>
            <Text>
                {title}
            </Text>
            <Button 
                onPress={()=>{onIncrease()}}
                 title = {`Increse ${title}`} 
            />
            <Button 
                onPress={()=>{onDecrease()}}
                title = {`Decrese ${title}`}
            />
        </View>
    )
}

const style = StyleSheet.create({

})
export default ColorCounter;