
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';
import React, { useState } from 'react';
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
});

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);
    return (
      <View style={styles.container}>
         <Text style={styles.contadorTitle}>Contador: {contador} </Text>
        <Fab title="+1" position="br"
          onPress={() => setContador(contador + 1)} />
        <Fab title="-1" position="bl"
          onPress={()=> setContador(contador - 1 )} />
        </View>
    );
};
