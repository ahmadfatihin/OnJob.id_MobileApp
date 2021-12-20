import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Spacing} from '../..';
import {ArrowLeft} from '../../../assets/icons';
import {colors} from '../../../utils';

const Header = onPress => {
  return (
    <View style={styles.container}>
      {/* <ArrowLeft /> */}
      <Button type="icon-only" onPress={onPress} icon={'arrow-back'} />
      <Text style={styles.text}>Header Component</Text>
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
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
});
