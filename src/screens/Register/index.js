import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Input, Spacing} from '../../component';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Registrasi" />
      <View style={styles.content}>
        <Input Label={'Full Name'} />
        <Spacing height={14} />
        <Input Label={'Email Adress'} />
        <Spacing height={14} />
        <Input Label={'Telephone Number'} />
        <Spacing height={14} />
        <Input Label={'Password'} />
        <Spacing height={20} />
        <Button
          title={'Continue'}
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 25,
    paddingTop: 0,
  },
});
