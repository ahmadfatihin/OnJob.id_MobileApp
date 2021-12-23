import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary[500],
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
