import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'

const windowsWidth = Dimensions.get ('window').width;

export default function HomeScreen ({navigation}) {
    return (
     <View style = {StyleSheet.container}>
         <Text style = {StyleSheet.title}> Home Screen</Text>
         <View style = {StyleSheet.buttonContainer}>
          <Button
            title = "Go to Details"
            onPress={() => navigation.navigate ('Details')}
         />
        </View>
        <View style={styles.buttonContainer}>
          <Button
           title= "Go to Profile"
           onPress={() => navigation.navigate('Profile')}
         />
        </View>
     </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', //cor fundo da tela

         },
         title:{
            fontSize: 24,
            marginBottom: 20,
         },
         buttonContainer:{
            backgroundColor: '#add8e6', //cor do fundo do container do botão
            margin: 10,
            width: windowsWidth *0.5,// 50% da largura da terra
            borderRadius: 5,
         },
});
