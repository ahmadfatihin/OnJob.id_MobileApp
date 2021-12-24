import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, NullPhoto} from '../../assets';
import {Button, Header} from '../../component';
import {colors, fonts} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={NullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <View>
            <Text style={styles.name}>Nama</Text>
          </View>
        </View>
        <View>
          <Button title="Continue" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 115,
    height: 115,
    borderWidth: 2,
    borderColor: colors.grey,
    borderRadius: 115 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
});
