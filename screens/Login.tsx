import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const Login = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={"transparent"} />
      {/* <View> */}
        <LinearGradient
          style={{ flex:1,height: "100%", width: "100%"}}
          // Background Linear Gradient
          colors={[ "#0c4848","#032525"]}
          end={{ x: 0.2, y: 0.5 }}
          start={{ x: 0, y: 0.3 }}
          locations={[0.1, 1]}
        />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
