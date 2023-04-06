import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { appIsReady, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export function OTPScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Send Money")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Enter OTP</Text>
        <Text style={styles.conText}>
          Enter one time password sent to the mail/phone number provided
        </Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.OtpBox}>
        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>

        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>
        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>
        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>

        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>
        <View style={styles.InStyle}>
          <TextInput
            style={styles.InputStyle}
            placeholder=""
            onChangeText={textInputhandler}
          />
        </View>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Continue"
            onPress={addUserInfoHandler}
            style={{ color: "red" }}
          ></Button>
        </TouchableOpacity>
      </View>
      
      <View>
        <TouchableOpacity>
          <Text style={styles.otp}>Resend OTP 52 sec</Text>
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
    marginTop: 40,
    marginRight: 200,
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

  conText: {
    color: "gray",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    display: "flex",
    margin: 20,
  },

  intro: {
    marginTop: 10,
    marginLeft: 10,
  },

  InStyle: {
    backgroundColor: "#e7e6e6",
    display: "flex",
    flexDirection: "row",
    flexDirection: "column",
    margin: 5,
    borderRadius: 10,
    height: 50,
    width: 50,
  },

  OtpBox: {
    display: "flex",
    flexDirection: "row",
  },

  InputStyle: {
    flex: 1,
    padding: 5,
    color: "red",
    textAlign: "center",
    fontFamily: "Inter_500Medium",
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
});
