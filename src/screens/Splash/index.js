import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {OnjobWhite} from '../../assets';
import {colors} from '../../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Welcome');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.images}>
          <OnjobWhite />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  images: {
    position: 'absolute',
    alignItems: 'center',
  },
});
