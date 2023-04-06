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
import { shadow } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowRotateLeft,
  faCircleArrowLeft,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function ScanQRCode({ navigation }) {
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
          onPress={() => navigation.navigate("Payment Link")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Scan QR Code</Text>
        <View
          style={{
            shadowColor: "#00B2FF",
            shadowOpacity: 0.5,
          }}
        >
          <Image style={styles.qrImage} source={require("../assets/qr.jpg")} />
        </View>
      </View>
      <StatusBar style="auto" />

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
    marginRight: 230,
    justifyContent: "flex-start",
  },
  intro: {
    marginTop: 10,
    
    
  },
  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
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
