import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Separator = () => {
  return (
    <View style={styles.separator}>      
    </View>
  );
};
const styles = StyleSheet.create({
    separator: {
        height: 0.9,
        backgroundColor: '#DAE0E2',
       
    }
});

export default Separator;
