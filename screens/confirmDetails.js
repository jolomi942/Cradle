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
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowRotateLeft,
  faCircleArrowLeft,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
export function ConfirmDetails({ navigation }) {
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
          onPress={() => navigation.navigate("Register")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.conText}>Confirm Details</Text>
        <Text style={styles.introText} placeholder="none">
          You are sending the sum of N20,000 to {"\n"}Adeola Oyewole {"\n"}
          0234556767{"\n"}Guaranty Trust Bank {"\n"}Transaction Fee - #100 10.5%
          of total transaction
        </Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Confirm Details"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 40,
  },

  conText: {
    color: "#070f4e",
    fontSize: 20,
    flexWrap: "wrap",
    fontFamily: "Inter_500Medium",
    display: "flex",
    marginBottom: 10,
    
  },

  introText: {
    color: "black",
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    marginBottom: 40,
  },

  intro: {
    marginTop: 10,
    marginRight:50
  },

  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",

    marginBottom: 300,
    justifyContent: "center",
    borderRadius: 10,
  },
});
