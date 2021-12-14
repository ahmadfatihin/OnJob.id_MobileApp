import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Button} from '../../component';
import {colors} from '../../utils';

export default class Welcome extends Component {
  render() {
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
        <Text style={styles.text}>
          OnJob.id adalah aplikasi berbagi kerja serabutan, sebuah alternatif
          solusi utk memberdayakan pengangguran di Indonesia utk mendapatkan
          lapangan kerja yg luas, penghasilan yg cukup, dan program pendidikan
          keahlian yg baik, agar kelak bisa menjadi tenaga ahli profesional yg
          mandiri sbg bekal kehidupan yg lebih baik di masa depan
        </Text>
        <View>
          <Button title="Masuk" />
          <Button type="grey" title="Daftar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    padding: 40,
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
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    paddingBottom: 20,
    textAlign: 'justify',
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
});
