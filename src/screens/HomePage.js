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
      <Button
        title='ThemeChanger'
        onPress={()=>{
          navigation.navigate('ThemeChanger')
        }}/>
        <Button 
          title='TextScreen'
          onPress={()=>{
            navigation.navigate('TextScreen')
          }}
        />
        <Button 
          title='Password Valid'
          onPress={()=>{
            navigation.navigate('PasswordValid')
          }}
        />
        <Button 
          title='Valid with reducers'
          onPress={()=>{
            navigation.navigate('ValidScreen')
          }}
        />
        <Button 
          title='Box Object Model'
          onPress={()=>{
            navigation.navigate('boxObjectModel')
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