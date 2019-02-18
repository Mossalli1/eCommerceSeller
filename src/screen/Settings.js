import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
