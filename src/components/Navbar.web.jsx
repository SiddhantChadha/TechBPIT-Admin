import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../assests/Colors";

const Navbar = (props) => {
  return (
    <View
      style={{
        height: props.height,
        backgroundColor: Colors.BLACK,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center",height:"100%"}}>
        <Image
          source={require("../assests/images/logo.png")}
          style={{ height: 50, width: 50}}
        />

        <Text style={{ color: Colors.WHITE, fontSize: 24, fontWeight: "500",marginLeft:10}}>
          TechBPIT
        </Text>
      </View>
    </View>
  );
};

export default Navbar;
