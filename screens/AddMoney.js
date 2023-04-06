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
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export function AddMoney({ navigation }) {
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
          onPress={() => navigation.navigate("OTP Screen")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <View>
          {/*<View style={styles.container}>  
          <View style={styles.header}>
            <TouchableOpacity 
            style={styles.nav}
            onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.brandText}>mymoni</Text>
              <View style={styles.profileOutline}><Image style={styles.userPix} source={require('../assets/profile-pix.jpg')}/></View>
            </TouchableOpacity>
            <View style={styles.tipOfDay}>
              <View style={styles.tipImgBlock}>
                <Image style={styles.tipOfDayImg} source={require('../assets/piggy-bank.jpg')}/>
              </View>
              <View style={styles.tip}>
                <Text style={styles.tipText}>By age 25, you should have saved at least 0.5x your annual expenses. The more the better.</Text>
                <View style={styles.tipOptions}>
                  <TouchableOpacity>
                    <Text style={styles.preTips}>Previous tips</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesomeIcon icon={faHeart} color={Theme.colors.brown500} size={Theme.fonts.fontSizePoint.caption}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> */}
        </View>
        <TouchableOpacity>
          <Text style={styles.introText}>Add Money</Text>
        </TouchableOpacity>
        <Text style={styles.conText}>
          Enter Amount
        </Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.InStyle}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Amount"
          inputMode="password"
          onChangeText={textInputhandler}
        />
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button
            title="Continue"
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

  intro: {
    marginTop: 10,
    marginLeft: 30,
  },
  conText: {
    color: "gray",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    display: "flex",
    margin: 10,
  },

  intro: {
    marginRight: 30
  },

  InStyle: {
    backgroundColor: "#e7e6e6",
    display: "flex",
    flexDirection: "row",
    margin: 3,
    marginTop: 20,
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
});
