import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconChatActive,
  IconChat,
  IconOrder,
  IconOrderAktif,
  IconProfile,
  IconProfileAktif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeAktif /> : <IconHome />;
    }
    if (title === 'Chat') {
      return active ? <IconChatActive /> : <IconChat />;
    }
    if (title === 'Order') {
      return active ? <IconOrderAktif /> : <IconOrder />;
    }
    if (title === 'Profile') {
      return active ? <IconProfile /> : <IconProfileAktif />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
