import { View, Text } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import Groups from "../screens/Groups";
import Posts from "../screens/Posts";
import Users from "../screens/Users";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DrawerNavigation = (props) => {
  return (
    <View style={{ flexDirection: "row", height: props.height }}>
      <View style={{ width: "20%" }}>
        <View style={{margin:10}}>
          <Link to={{ screen: "Posts" }} >Posts</Link>
          <Link to={{ screen: "Groups" }}>Groups</Link>
          <Link to={{ screen: "Users" }}>Users</Link>
        </View>
      </View>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </View>
  );
};

export default DrawerNavigation;
