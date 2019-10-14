import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { AppLoading, Asset } from "expo";

import Navigation from "./navigation";
import { Block } from "./components";
import * as constants from "./constants";

const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
]

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  }
  handleResourcesAsync = async () => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(img).downloadAsync();
    });

    return Promise.all(cacheImages);
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading 
          startAsync={this.handleResourcesAsync}
          onError={console.warn}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }
    return (
      <Block white>
        <Navigation />
      </Block>
    )
  }
}

const styles = StyleSheet.create({
})
