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
import Home from '../views/Home';
import Augustine from '../views/Augustine';
import Lindau from '../views/Lindau';
import Fanad from '../views/Fanad';
import Peggys from '../views/Peggys';
import Hercules from '../views/Hercules';
import Bass from '../views/Bass';
import About from '../views/About';
import Credits from '../views/Credits';
import SideMenu from '../Components/SideMenu';
import OverflowMenu from '../Components/OverflowMenu';
import AppBarLeft from '../Components/AppBarLeft';
import {
  bgHeader,
  headerColor,
  drawerItemColor,
  bgDrawerActiveItem,
  drawerActiveItemColor,
} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const openOverflowMenuScreens = (e, navigation) => {
  switch (e.index) {
    case 0:
      navigation.navigate('about');
      break;
    case 1:
      navigation.navigate('credits');
      break;
    default:
      navigation.navigate('about');
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
    headerRight: <OverflowMenu
      labels={['About', 'Credits']}
      onPress={(e) => { openOverflowMenuScreens(e, navigation); }}
    />,
    drawerIcon: ({ tintColor }) => (<Icon name={getDrawerIcon(idx)} size={24} style={{ color: tintColor }} />),
  }),
});

const stackNavRoutes = {
  homeScreen: { screen: StackNavigator({ screen: { screen: Home }}, setNavigationOptions(0)) },
  lindau: { screen: StackNavigator({ screen: { screen: Lindau }}, setNavigationOptions(1)) },
  fanad: { screen: StackNavigator({ screen: { screen: Fanad }}, setNavigationOptions(1)) },
  augustine: { screen: StackNavigator({ screen: { screen: Augustine }}, setNavigationOptions(1)) },
  peggys: { screen: StackNavigator({ screen: { screen: Peggys }}, setNavigationOptions(1)) },
  hercules: { screen: StackNavigator({ screen: { screen: Hercules }}, setNavigationOptions(1)) },
  bass: { screen: StackNavigator({ screen: { screen: Bass }}, setNavigationOptions(1)) },
  about: { screen: StackNavigator({ screen: { screen: About }}, setNavigationOptions(3)) },
  credits: { screen: StackNavigator({ screen: { screen: Credits }}, setNavigationOptions(4)) },
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
