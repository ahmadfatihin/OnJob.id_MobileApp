import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Beliin} from '../../../assets';

const MenuCategory = () => {
  return (
    <View style={styles.container}>
      <Image source={Beliin} />
      <Text>Menu Category</Text>
    </View>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignSelf: 'flex-start',
  },
});
