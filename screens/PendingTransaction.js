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


export function PendingTransaction({ navigation }) {
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
          onPress={() => navigation.navigate("Cancel Transaction")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Pending Transaction</Text>
        <Text style={styles.conText}>
          We have sent a SMS to the receiver about this transaction{"\n"}and we
          would only be releasing the money to the receiver{"\n"}when you click
          "Tell us to pay" Button
        </Text>
      </View>
      <StatusBar style="auto" />

      <Image
        style={styles.pendingImage}
        source={require("../assets/Animated.jpg")}
      />

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Tell us to pay"
            style={{ color: "white" }}
            onPress={addUserInfoHandler}
          ></Button>
        </TouchableOpacity>
      </View>

      <View style={styles.Button2Style}>
        <TouchableOpacity>
          <Button
            title="Tell us to cancel"
            style={{ color: "white" }}
            onPress={addUserInfoHandler}
          ></Button>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.anotherTransacText}>
          Perform another transaction
        </Text>
        <Text style={styles.transactionRules}>
          Please donot click the "Tell us to pay" button if you have not {"\n"}
          gotten what you wanted. Once you click "Tell us to pay",{"\n"}we have
          no authority over the funds again. For more details, please{"\n"}read
          our <Text style={{ color: "#0e2883" }}>Terms and Policy</Text>
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
    marginRight: 70,
  },

  Button2Style: {
    height: 50,
    width: 350,
    backgroundColor: "#FF0606",
    color: "#D20303",
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
