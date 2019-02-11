import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Cart</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-start"
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
