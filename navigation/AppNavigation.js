import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DrawerNavigator,
  StackNavigator,
} from 'react-navigation';
import Home from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GoalScreen from '../screens/GoalScreen';
import AccountScreen from '../screens/AccountScreen';
import {
  bgHeader,
  headerColor,
  drawerItemColor,
  bgDrawerActiveItem,
  drawerActiveItemColor,
} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SideMenu from '../components/SideMenu';
import PopupMenu from '../components/PopupMenu';
import AppBarLeft from '../components/AppBarLeft';

const openOverflowMenuScreens = (e, navigation) => {
  switch (e.index) {
    case 0:
      navigation.navigate('about');
      break;
    case 1:
      navigation.navigate('credits');
      break;
    default:
      return;
  }
}

const getDrawerIcon = (index) => {
  let icon = 'md-analytics';
  switch(index) {
    case 0:
      icon='md-analytics';
      break;
    case 1:
      icon='md-aperture';
      break;
    case 2:
      icon='md-attach';
      break;
    case 3:
      icon='md-bonfire';
      break;
    case 4:
      icon='logo-android';
      break;
    default:
      icon='md-analytics';
      break;
  }
  return icon;
};

const setNavigationOptions = (idx) => ({
  navigationOptions: ({navigation}) => ({
    headerMode: 'screen',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: headerColor,
    headerLeft: <AppBarLeft navigation={navigation} />,
    headerRight: <PopupMenu
      labels={['About', 'Credits']}
      onPress={(e) => { openOverflowMenuScreens(e, navigation); }}
    />,
    drawerIcon: ({ tintColor }) => (<Icon name={getDrawerIcon(idx)} size={24} style={{ color: tintColor }} />),
  }),
});

const stackNavRoutes = {
  homeScreen: { screen: StackNavigator({ screen: { screen: Home }}, setNavigationOptions(0)) },
  goalScreen: { screen: StackNavigator({ screen: { screen: GoalScreen }}, setNavigationOptions(1)) },
  accountScreen: { screen: StackNavigator({ screen: { screen: AccountScreen }}, setNavigationOptions(1)) },
  settingsScreen: { screen: StackNavigator({ screen: { screen: SettingsScreen }}, setNavigationOptions(1)) },
};

/* getDrawerWidth       Default drawer width is screen width - header width
* https://material.io/guidelines/patterns/navigation-drawer.html
*/
const getDrawerWidth = () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

const DrawerStack = DrawerNavigator(
  stackNavRoutes,
  {
    drawerWidth: getDrawerWidth(),
    contentComponent: SideMenu,
    contentOptions: {
      activeTintColor: drawerActiveItemColor,
      activeBackgroundColor: bgDrawerActiveItem,
      inactiveTintColor: drawerItemColor,
      labelStyle: { fontSize: 14 },
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: bgHeader,
    height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
    paddingTop: 24, // StatusBar's height
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerTitle: {
    // marginLeft: 50,
    alignSelf: 'flex-start',
  },
  headerLeft: {
    flexDirection: 'row',
  },
});

export default DrawerStack;
