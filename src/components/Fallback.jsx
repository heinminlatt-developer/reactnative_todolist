import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Fallback = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, color: 'steelblue', fontWeight: 'bold'}}>
        Please Add
      </Text>
      <Image
        source={require('../assets/images/todo.jpg')}
        style={styles.image}
      />
      <Text style={{fontSize: 25, color: 'steelblue', fontWeight: 'bold'}}>
        Start adding you task
      </Text>
    </View>
  );
};
export default Fallback;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 200,
    width: 300,
  },
});
