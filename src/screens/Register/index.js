import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Spacing, Link, Button, Header} from '../../component';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.pages}>
      <Header />
      <Input Label={'Full Name'} />
      <Spacing height={14} />
      <Input Label={'Email Adress'} />
      <Spacing height={14} />
      <Input Label={'Telephone Number'} />
      <Spacing height={14} />
      <Input Label={'Password'} />
      <Spacing height={20} />
      <Button title={'Continue'} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pages: {
    padding: 25,
    flex: 1,
    backgroundColor: colors.white,
  },
});
