import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Spacing, Link, Button, Header} from '../../component';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header onPress={() => alert('hello')} />
      <View style={styles.content}>
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
