import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = () => {
  return (
    <View>
      <Text style={styles.link}>Link Component</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
  },
});
