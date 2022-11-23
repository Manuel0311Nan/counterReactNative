/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    contadorTitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    sumarButton:{
        backgroundColor: 'green',
        borderRadius: 50,
    },
    restarButton:{
        backgroundColor: '#526',
        //textDecorationColor:'#fff',
        borderRadius: 50,
    },
});

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.contadorTitle}>Contador: {contador} </Text>
            <TouchableOpacity
                style={styles.sumarButton}
        onPress={ ()=> setContador(contador + 1)}
      >
        <Text>Sumar 1 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.restarButton}
        onPress={ ()=> setContador(contador - 1)}
      >
        <Text>Restar 1 </Text>
      </TouchableOpacity>
        </View>
    );
};
