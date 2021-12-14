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
        <Text style={styles.text}>
          OnJob.id adalah aplikasi berbagi kerja serabutan, sebuah alternatif
          solusi utk memberdayakan pengangguran di Indonesia utk mendapatkan
          lapangan kerja yg luas, penghasilan yg cukup, dan program pendidikan
          keahlian yg baik, agar kelak bisa menjadi tenaga ahli profesional yg
          mandiri sbg bekal kehidupan yg lebih baik di masa depan
        </Text>
        <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    padding: 40,
  },
  logo: {
    paddingTop: 40,
    paddingBottom: 40,
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  text: {
    paddingTop: 40,
    textAlign: 'justify',
    color: colors.black,
  },
});
