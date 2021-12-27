import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeProfile, MenuCategory} from '../../component';

const Home = () => {
  return (
    <View>
      <HomeProfile />
      <Text></Text>
      <MenuCategory />
      <MenuCategory />
      <MenuCategory />
      <MenuCategory />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
