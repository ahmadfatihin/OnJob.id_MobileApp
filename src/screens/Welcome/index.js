import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Button, Spacing} from '../../component';
import {colors} from '../../utils';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/dummy/logo.png')}
        />
      </View>
      <View>
        <Text style={styles.title}>Selamat Datang di Onjob.ID</Text>
      </View>
      <Text style={styles.caption}>
        OnJob.id adalah aplikasi berbagi kerja serabutan, sebuah alternatif
        solusi utk memberdayakan pengangguran di Indonesia utk mendapatkan
        lapangan kerja yg luas, penghasilan yg cukup, dan program pendidikan
        keahlian yg baik, agar kelak bisa menjadi tenaga ahli profesional yg
        mandiri sbg bekal kehidupan yg lebih baik di masa depan
      </Text>
      <View>
        <Button title="Masuk" onPress={() => navigation.navigate('Login')} />
        <Spacing height={14} />
        <Button
          type="grey"
          title="Daftar"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    padding: 30,
    paddingBottom: 35,
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  title: {
    paddingTop: 20,
    color: colors.primary,
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  caption: {
    paddingBottom: 15,
    textAlign: 'justify',
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
});
