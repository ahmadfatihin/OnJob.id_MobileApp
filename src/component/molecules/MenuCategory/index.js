import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Beliin} from '../../../assets';

const MenuCategory = () => {
  return (
    <View>
      <Image source={Beliin} />
      <Text>Menu Category</Text>
    </View>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({});
