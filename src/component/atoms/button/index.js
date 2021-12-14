import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'grey' ? colors.grey : colors.primary,
    paddingVertical: 10,
    borderRadius: 15,
  }),
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
