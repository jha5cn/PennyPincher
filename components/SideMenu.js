import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerItems,
} from 'react-navigation';
import {
  bgDrawerHeader,
  drawerLogoColor,
  headerColor,
  bgDrawer,
} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SideMenu = (props) => (
  <ScrollView style={styles.container}>
    <DrawerItems {...props} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgDrawer,
  },
  header: {
    flexDirection: 'column',
    paddingTop: 40,
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader,
  },
  drawerTitle: {
    color: headerColor,
    fontWeight: '500',
    fontSize: 14
  },
});

export default SideMenu;
