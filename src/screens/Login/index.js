import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Onjob} from '../../assets';
import {Button, Input, Link, Spacing} from '../../component/atoms';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Onjob style={styles.onjob} />
      <Input Label={'Full Name'} />
      <Spacing height={14} />
      <Input Label={'Email Adress'} />
      <Spacing height={14} />
      <Input Label={'Password'} />
      <Link title={'Lupa Password'} size={13} />
      <Spacing height={20} />
      <Button title={'Sign In'} onPress={() => navigation.replace('MainApp')} />
      <Spacing height={20} />
      <Link title={'Buat Akun Baru'} size={17} align={'center'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  pages: {
    padding: 25,
    flex: 1,
    backgroundColor: colors.white,
  },
  onjob: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});
