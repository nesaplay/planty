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
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
