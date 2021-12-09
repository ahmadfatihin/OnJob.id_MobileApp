import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors} from '../../utils';
import {Logo} from '../../assets';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <Text>
          OnJob.id adalah aplikasi berbagi kerja serabutan, sebuah alternatif
          solusi utk memberdayakan pengangguran di Indonesia utk mendapatkan
          lapangan kerja yg luas, penghasilan yg cukup, dan program pendidikan
          keahlian yg baik, agar kelak bisa menjadi tenaga ahli profesional yg
          mandiri sbg bekal kehidupan yg lebih baik di masa depan
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: '30%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
});
