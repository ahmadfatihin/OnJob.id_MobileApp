import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Onjob} from '../../assets';
import {Button, Input, Link} from '../../component/atoms';
import {colors} from '../../utils';

const Login = () => {
  return (
    <View style={styles.pages}>
      <Onjob style={styles.onjob} />
      <Text>Test</Text>
      <Input />
      <Link />
      <Button title={'Sign In'} />
      <Link />
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
    marginBottom: 30,
  },
});
