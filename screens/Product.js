import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Button, Block, Divider, Text, Input } from "../components";
import { theme, mocks } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };
  renderGallery() {
    const { product } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.gallery}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }
  render() {
    const { product } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>
          <Block row flex={false} margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text caption gray style={styles.tag} key={`tag-${tag}`}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>
            {product.description}
          </Text>

          <Divider margin={[theme.sizes.padding * 0.9, 0]} />

          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {product.gallery.slice(1, 3).map((img, i) => (
                <Image source={img} style={styles.image} key={`gallery-${i}`} />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197, 204, 214, 0.20)"
                style={styles.more}
              >
                <Text gray>+{product.gallery.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.7,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  }
});
