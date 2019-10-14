import React, { Component } from "react";
import { Animated, StyleSheet, Image, Dimensions, Modal, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    showTerms: false,
  };
  scrollX = new Animated.Value(0);

  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
          <Text h2 light>Terms of Service</Text>
          <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
            {[...Array(12).keys()].map(key => (
              <Text caption gray height={18} key={key}>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              </Text>
            ))}
          </ScrollView>
          <Button gradient onPress={() => this.setState({ showTerms: false })}>
            <Text center white>I understand</Text>
          </Button>
        </Block>
      </Modal>
    );
  }
  handleLogin() {
    const { navigation } = this.props;
    //auth with 3rd party
    navigation.navigate("Login");
  }
  renderIllustrations() {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image source={item.source} resizeMode="contain" style={{ width, height: height / 2, overflow: "visible" }} />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } },
          },
        ])}
      />
    );
  }
  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          return <Block animated flex={false} color="gray" key={`step-${index}`} style={[styles.steps, { opacity }]} />;
        })}
      </Block>
    );
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block>
        <Block center middle flex={0.5}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary>
              Greener.
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => this.handleLogin()}>
            <Text center semibold>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("Signup")}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
        </Block>
        {this.renderTermsService()}
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") },
  ],
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
