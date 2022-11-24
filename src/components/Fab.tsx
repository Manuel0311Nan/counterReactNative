/* eslint-disable react/react-in-jsx-scope */
//? fab --> Floating action Bottom
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 15,
    top: 1,
  },
  bottomR: {
    right: 15,
  },
  bottomS: {
    left: 15,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    //! La elevation solo afecta a Android
    elevation: 23,
  },
  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}
export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.bottomS : styles.bottomR,
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//*Está opción para el Touchableopacity también Funciona
//* En la opción que aparece en el código estandarizamos una parte de los estilos
/*
<TouchableOpacity
                style={(position === 'bl') ? styles.fabLocationBR : styles.fabLocationBS}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title} </Text>
                </View>
            </TouchableOpacity>*/
