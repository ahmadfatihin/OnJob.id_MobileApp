import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeProfile, MenuCategory, NewsItem} from '../../component';

const Home = () => {
  return (
    <View>
      <HomeProfile />
      <Text></Text>
      <View style={styles.category}>
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
        <MenuCategory />
      </View>

      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
  },
});
