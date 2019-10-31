import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import Slider from "react-native-slider";

import { Button, Block, Text, Switch, Card, Badge, Divider } from "../components";
import { theme, mocks } from "../constants";
import { ScrollView, TextInput } from "react-native-gesture-handler";

class Settings extends Component {
  state = {
    budget: 850,
    cap: 1700,
    notifications: true,
    newsletter: false,
    editing: false,
    profile: {},
  };
  handleEdit = (name, text) => {
    const { profile } = this.state;
    profile[name] = text;

    this.setState({ profile });
  };
  renderEdit = name => {
    const { editing, profile } = this.state;
    if (editing === name) {
      return <TextInput defaultValue={profile[name]} onChangeText={text => this.handleEdit(name, text)} />;
    }
    return <Text bold>{profile[name]}</Text>;
  };
  toggleEdit = name => {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  };
  componentDidMount() {
    this.setState({ profile: this.props.profile });
  }
  render() {
    const { navigation } = this.props;
    const { profile, editing } = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Settings
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Username
                </Text>
                {this.renderEdit("username")}
              </Block>
              <Text medium secondary onPress={() => this.toggleEdit("username")}>
                {editing === "username" ? "Save" : "Edit"}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Location
                </Text>
                {this.renderEdit("location")}
              </Block>
              <Text medium secondary onPress={() => this.toggleEdit("location")}>
                {editing === "location" ? "Save" : "Edit"}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  E-mail
                </Text>
                {this.renderEdit("email")}
              </Block>
            </Block>
          </Block>

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

          <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>
                Budget
              </Text>
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
              <Text caption gray right>
                $1.000
              </Text>
            </Block>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>
                Monthly Cap
              </Text>
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
              <Text caption gray right>
                $5.000
              </Text>
            </Block>
          </Block>

          <Divider />

          <Block style={styles.toggles}>
            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
              <Text gray2>Notifications</Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })}
              />
            </Block>
            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
              <Text gray2>Newsletter</Text>
              <Switch value={this.state.newsletter} onValueChange={value => this.setState({ newsletter: value })} />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
};

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
    alignItems: "flex-end",
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
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});
