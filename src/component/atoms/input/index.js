import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({Label}) => {
  return (
    <View>
      <Text style={styles.label}>{Label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  label: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 5,
    fontFamily: fonts.primary[500],
  },
});
