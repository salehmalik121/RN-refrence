import React from 'react';
import {View, Text , StyleSheet ,FlatList } from 'react-native';

const ListScreen = ()=>{
    const friend = [
        {name : 'Friend 1' , age : 20},
        {name : 'Friend 2' , age : 20},
        {name : 'Friend 3' , age : 20},
        {name : 'Friend 4' , age : 20},
        {name : 'Friend 5' , age : 20},
        {name : 'Friend 6' , age : 20},
        {name : 'Friend 7' , age : 20},
    ]
    return (
        <FlatList
            keyExtractor={(item)=>item.name}
            data={friend}
            renderItem={({item})=>{
                return(
                    <View style = {style.ListStyle}>
                        <Text>
                            {item.name} and age is {item.age}
                        </Text>
                    </View>
                )
            }}
        />
    )
}
const style = StyleSheet.create({
    ListStyle : {
        marginVertical:50,
    }
})
export default ListScreen;