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


export function PaymentLink({ navigation }) {
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
      <View style={styles.intro}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login Current Device")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Copy Payment Link</Text>
      </View>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.textLink}>link</Text>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Copy Link"
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
    fontSize: 18,
    fontFamily: "Inter_500Medium",
    marginTop: 60,
    margin:10,
    textAlign:"center",
    justifyContent: "flex-start",
  },
  intro: {
    marginTop: 10,
  },
  textLink:{
    margin:20
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

  qrImage: {
    height: 300,
    width: 250,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    margin: 50,
    borderWidth: 0.1,
    borderColor: "#00B2FF",
    shadowOpacity: 0.2,
    shadowColor: "#00B2FF",
  },
});

