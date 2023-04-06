
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity, Button
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

export function Register({ navigation }) {
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
          onPress={() => navigation.navigate("Pending Transaction")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Sign Up</Text>
        <Text style={styles.conText}>
          Join us today and start Buying with Confidence!{"\n"} it takes just
          few seconds.
        </Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Name: Ex - John Julius"
          inputMode="text"
          onChangeText={textInputhandler}
        />
      </View>

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Email:Ex - julius@example.com"
          inputMode="email"
          onChangeText={textInputhandler}
        />
      </View>
      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Phone"
          inputMode="tel"
        />
      </View>

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Create Password"
          inputMode="password"
          onChangeText={textInputhandler}
        />
      </View>
      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Confirm password"
          inputMode="password"
          onChangeText={textInputhandler}
        />
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Sign up"
            style={{ color: "white" }}
            onPress={addUserInfoHandler}
          ></Button>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.passwrdRules}>
          Password must: {"\n"}Be 8 Characters Long {"\n"}Contains Letter {"\n"}
          Contain Number {"\n"}Contains Capital Letter
        </Text>
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
    marginVertical: 40,
  },
  
  conText: {
    color: "gray",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    display: "flex",
    margin: 10,
  },
  introText: {
    color: "black",
    fontSize: 17,
    fontFamily: "Inter_500Medium",
    margin: 10,
  },
  intro: {
    marginRight: 70,
  },

  InStyle: {
    backgroundColor: "#e7e6e6",
    display: "flex",
    flexDirection: "row",
    margin: 5,
    borderRadius: 10,
    height: 50,
    width: 350,
  },

  InputStyle: {
    flex: 1,
    padding: 5,
    color: "red",
    paddingLeft: 15,
    fontFamily: "Inter_500Medium",
  },
  tinyLogo: {
    height: 40,
    width: 60,
  },
  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: 30,
    justifyContent: "center",
    borderRadius: 10,
  },
  passwrdRules: {
    marginRight: 160,
    color: "red",
  },
});
