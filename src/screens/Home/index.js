import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeProfile, MenuCategory, NewsItem} from '../../component';

const Home = () => {
  return (
    <View>
      <HomeProfile />
      <Text></Text>
      <MenuCategory />
      <MenuCategory />
      <MenuCategory />
      <MenuCategory />

      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
