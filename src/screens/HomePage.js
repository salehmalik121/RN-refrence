import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>Lets Work</Text>
      <Button onPress={()=>{
        navigation.navigate("Welcome")
      }}
       title='Welcome' />
      <Button onPress={()=>{
        navigation.navigate("ListScreen")
      }}
       title='List' />
      <Button 
        title='Image' 
        onPress={()=>{
          navigation.navigate('ImageScreen')
        }}
      />
      <Button 
      title='Counter Screen'
       onPress={()=>{
        navigation.navigate('CounterScreen')
      }}/>
      <Button
        title='Colors'
        onPress={
          ()=>{
            navigation.navigate('ColorsScreen')
          }
        }
      />
      <Button
        title='RGB Color picker'
        onPress={()=>{
          navigation.navigate('SliderScreen')
        }}
      />
      <Button
        title='Color Counter'
        onPress={()=>{
          navigation.navigate('ColorCounterScreen')
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'indigo', 
    textAlign: 'center',
  },
  button:{
    backgroundColor:'green'
    
  }
});

export default HomeScreen;