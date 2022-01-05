import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Beliin} from '../../../assets';
import {colors} from '../../../utils';

const MenuCategory = () => {
  return (
    <View style={styles.container}>
      <Image source={Beliin} style={styles.images} />
      <Text style={styles.text}>Menu Category</Text>
    </View>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignSelf: 'flex-start',
    backgroundColor: colors.grey,
  },
  images: {
    marginBottom: 9,
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
