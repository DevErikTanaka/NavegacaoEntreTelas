import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'

const windowsWidth = Dimensions.get ('window').width;

export default function HomeScreen ({navigation}) {
    return (
     <View style = {styles.container}>
         <Text style = {styles.title}> Home Screen</Text>
         <View style = {styles.buttonContainer}>
          <Button
            title = "Go to Home"
            onPress={() => navigation.navigate ('Home')}
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
        backgroundColor: '#faf0e6', //cor fundo da tela

         },
         title:{
            fontSize: 24,
            marginBottom: 20,
         },
         buttonContainer:{
            backgroundColor: '#ffebcd', //cor do fundo do container do botão
            margin: 10,
            width: windowsWidth *0.5,// 50% da largura da terra
            borderRadius: 5,
         },
});
