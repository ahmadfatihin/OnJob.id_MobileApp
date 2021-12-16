import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'grey' ? colors.grey : colors.primary,
    paddingVertical: 10,
    borderRadius: 13,
  }),
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
