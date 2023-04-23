import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Groups from '../screens/Groups';
import Posts from '../screens/Posts';
import Users from '../screens/Users';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Groups" component={Groups} />
    <Drawer.Screen name="Users" component={Posts} />
    <Drawer.Screen name="Logout" component={Users} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation