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

export function PleaseWait({ navigation }) {
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
          onPress={() => navigation.navigate("Receive Money")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Please Wait</Text>
        <Text style={styles.conText}>
          While we confirm the invalidity of the transaction from the receiver,
          we apologise for any inconvinience this might have caused you. Your
          money will reflect in your wallet as soon as all security option is
          met.
          {"\n"}
          {"\n"}
          For more information please read our{" "}
          <Text style={{ color: "#0e2883" }}>Terms and Policy</Text> of use
        </Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Perform Another Transaction"
            style={{ color: "white" }}
            onPress={addUserInfoHandler}
          ></Button>
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
    backgroundColor: "white",
    alignItems: "center",
  },

  arrowLeftIcon: {
    marginBottom: 20,
    marginRight: 200,
    alignItems: "flex-start",
  },

  conText: {
    color: "red",
    fontSize: 9,
    fontFamily: "Inter_500Medium",
    display: "flex",
    margin: 10,
  },
  introText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    margin: 10,
  },

  anotherTransacText: {
    color: "#0e2883",
    fontSize: 10,
    fontFamily: "Inter_500Medium",
    margin: 10,
    textAlign: "center",
  },
  intro: {
    marginLeft: 20,
    marginTop: 40,
  },

  Button2Style: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
  },

  InputStyle: {
    flex: 1,
    padding: 5,
    color: "red",
    paddingLeft: 15,
    fontFamily: "Inter_500Medium",
  },
  pendingImage: {
    height: 120,
    width: 120,
    margin: 30,
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
  transactionRules: {
    color: "red",
    fontSize: 9,
    fontFamily: "Inter_500Medium",
    display: "flex",
    margin: 10,
  },
});
