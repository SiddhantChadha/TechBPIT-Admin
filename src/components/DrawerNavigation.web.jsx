import { View, Text } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import Groups from "../screens/Groups";
import Posts from "../screens/Posts";
import Users from "../screens/Users";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <View>
        <Link to={{ screen: "Posts" }}>Posts</Link>
      </View>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </>
  );
};

export default DrawerNavigation;
