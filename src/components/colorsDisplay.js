import React from 'react';
import { View , StyleSheet , FlatList ,Text } from 'react-native';
const ColorsDisplay = ({List , name}) => {
    console.log({List});
    return (
        <View>
            <FlatList 
                keyExtractor={({index}) => index}
                data={List}
                renderItem = {({item}) => {
                    return(
                       <View style={{width:100 , height : 100 , backgroundColor: item}}/>
                    )
                }}
            />
        </View>
    )
}
const style = StyleSheet.create({

})
export default ColorsDisplay;