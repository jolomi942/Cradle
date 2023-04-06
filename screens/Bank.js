import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { appIsReady, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowRotateLeft,
  faCircleArrowLeft,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function Bank({ navigation }) {
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
        onPress={() => navigation.navigate("Scan QR Code")}
        style={styles.arrowLeftIcon}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#0e2883"}
          size={30}
        />
      </TouchableOpacity>

      <View style={styles.intro}>
        <Text style={styles.introText}>Bank Transfer</Text>
      </View>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.bankText}>2233432223 🗺</Text>
        <Text style={styles.bankText}>Wema Bank </Text>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Copy Number"
            style={{ color: "white" }}
            onPress={addUserInfoHandler}
          ></Button>
        </TouchableOpacity>
      </View>

      <View style={styles.link}></View>
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
    backgroundColor: "white",
    alignItems: "center",
  },
  arrowLeftIcon: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    marginRight: 300,
    alignItems: "flex-start",
  },

  introText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    margin: 10,
    marginRight: 230,
    justifyContent: "flex-start",
  },

  intro: {
    marginLeft: 30,
    marginTop: 90,
  },

  bankText: {
    marginRight: 220,
  },

  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
});
