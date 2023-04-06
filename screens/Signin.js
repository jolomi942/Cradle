import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useRef, appIsReady, useState, useEffect, useCallback } from "react";
import { Inter_500Medium } from "@expo-google-fonts/inter";


export function Signin ({navigation}) {
  let [inter] = useFonts({
    Inter_500Medium,
  });
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/sumbo.png")} />
      <Text style={styles.conText}>Cradle makes you warm!</Text>
      <StatusBar style="auto" />
      <View style={styles.InStyle}>
        <TextInput style={styles.InputStyle} placeholder="Enter your email" />
      </View>
      
      <View style={styles.InStyle}>
        <TextInput style={styles.InputStyle} placeholder="Enter your Password" />
      </View>
      <Text>Sign up</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  conText: {
    color: "black",
    fontSize: 10,
  },
  InStyle: {
    backgroundColor: "#dddd",
    display: "flex",
    flexDirection: "row",
    margin: 30,
    borderRadius: 10,
    height: 50,
  },

  InputStyle: {
    flex: 1,
    padding: 5,
    color: "black",
    paddingLeft: 15,
  },
  tinyLogo: {
    height: 40,
    width: 60,
  },
});
