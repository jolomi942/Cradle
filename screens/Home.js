import React from "react";
import { useRef, appIsReady, useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Inter_500Medium } from "@expo-google-fonts/inter";

export function Home() {
useEffect(() => {
    async function prepare() {
      try {
          await Font.loadAsync({Inter_500Medium});
          await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
     
      await SplashScreen.hideAsync();
    }
  },  [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
   
    <View style={styles.container}>
      <Image
        style={styles.famPix}
        source={require("../assets/familypix.jpg")}
      />
    </View>
 
)
 };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  brandText: {
    color: "brown",
  },

  
  
});