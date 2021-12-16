import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = () => {
  return (
    <View>
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
});
