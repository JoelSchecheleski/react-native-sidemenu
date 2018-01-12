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
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Icon name="md-boat" size={50} color={drawerLogoColor} />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.drawerTitle}>Lighthouses</Text>
        <Text style={styles.drawerEmail}>pablodarde@gmail.com</Text>
      </View>
    </View>
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
    paddingTop: 40, // 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16,
    height: 170,
    backgroundColor: bgDrawerHeader,
  },
  headerLogo: {
    width: 64,
    height:64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  subTitle: {
    height: 56,
    paddingTop: 8,
  },
  drawerTitle: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
  },
  drawerEmail: {
    color: headerColor,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default SideMenu;
