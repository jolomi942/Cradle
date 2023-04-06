import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { appIsReady, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Button } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowRotateLeft,
  faCircleArrowLeft,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Signup({ navigation }) {
  const [enteredUserInfoText, setEnteredTextInput] = useState("");
  const [userProfile, setUserProfile] = useState([""]);

  function textInputhandler(enteredText) {
    setEnteredTextInput(enteredText);
  }

  function addUserInfoHandler(enteredText) {
    setUserProfile([setEnteredTextInput, enteredUserInfoText]);
  }

  let [inter] = useFonts({
    Inter_500Medium,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Bank")}
        style={styles.arrowLeftIcon}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#0e2883"}
          size={30}
        />
      </TouchableOpacity>
      <Image style={styles.tinyLogo} source={require("../assets/sumbo.png")} />
      <Text style={styles.conText}>Cradle makes you warm!</Text>
      <StatusBar style="auto" />
      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Enter your First name"
          onChangeText={textInputhandler}
        />
      </View>

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Enter your Last name"
          onChangeText={textInputhandler}
        />
      </View>
      <View style={styles.InStyle}>
        <TextInput style={styles.InputStyle} placeholder="Enter your email" />
      </View>

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Enter your 8 digit password"
          onChangeText={textInputhandler}
        />
      </View>

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Confirm Password"
          onChangeText={textInputhandler}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Button title="Sign up" onPress={addUserInfoHandler}>
            CREATE ACCOUNT
          </Button>
        </TouchableOpacity>
      </View>

      <View style={styles.listStyle}>
        {userProfile.map(user => (
          <Text key={user}>{user}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    
  },
  arrowLeftIcon: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    alignItems: "flex-start",
  },

  conText: {
    color: "black",
    fontSize: 10,
    fontFamily: "Inter_500Medium",
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
    fontFamily: "Inter_500Medium",
  },
  tinyLogo: {
    height: 40,
    width: 60,
  },
  buttonStyle: {
    height: 40,
    width: 30,
  },
});
