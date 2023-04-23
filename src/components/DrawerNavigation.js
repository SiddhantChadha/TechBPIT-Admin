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
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Posts" component={Posts} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation