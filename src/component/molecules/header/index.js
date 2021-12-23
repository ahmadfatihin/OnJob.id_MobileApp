import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Spacing} from '../..';
import {colors, fonts} from '../../../utils';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} icon={'arrow-back'} />
      <Text style={styles.text}>{title}</Text>
      <Spacing width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.primary,
  },
});
