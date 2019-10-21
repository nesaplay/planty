import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import Slider from "react-native-slider";

import { Button, Block, Text, Input, Card, Badge, Divider } from "../components";
import { theme, mocks } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

class Settings extends Component {
  state = {
    budget: 850,
    cap: 1700,
  }
  render() {
    const { profile, navigation } = this.props;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Settings</Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Username</Text>
                <Text bold>shone</Text>
              </Block>
              <Text medium secondary>Edit</Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Location</Text>
                <Text bold>Belgrade</Text>
              </Block>
              <Text medium secondary>Edit</Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>E-mail</Text>
                <Text bold>shone@invoce.com</Text>
              </Block>
              <Text medium secondary>Edit</Text>
            </Block>
          </Block>

          <Divider margin={[10, 0]} />

          <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>Budget</Text>
              <Slider 
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.1)"
                value={this.state.budget}
                onValueChange={value => this.setState({ budget: value })}
              />
              <Text caption gray right>$1.000</Text>
            </Block>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>Monthly Cap</Text>
              <Slider 
                minimumValue={0}
                maximumValue={5000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.1)"
                value={this.state.cap}
                onValueChange={value => this.setState({ cap: value })}
              />
              <Text caption gray right>$5.000</Text>
            </Block>

          <Divider />


          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
}

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: theme.sizes.base * 0.7,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  }
});
