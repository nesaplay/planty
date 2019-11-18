import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Signup from "../screens/Signup";
import Forgot from "../screens/Forgot";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Signup,
    Forgot,
    Browse,
    Explore,
    Product,
    Settings,
  },
  { 
    initialRouteName: "Explore",
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0, // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    },
  }
);

export default createAppContainer(screens);
