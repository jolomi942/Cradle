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

export function Congratulations({ navigation }) {
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
      <StatusBar style="auto" />
      <View style={styles.intro}>
        <Text style={styles.conText}>Congratulations</Text>
        <Text style={styles.imageText}>
          Welcome to SafeZone. Now you can buy, sell, transact{"\n"}
          with anyone online and offline. Just make sure you {"\n"} "always pay
          with SafeZone"
        </Text>
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
      </View>

      <View style={styles.ImageStyle}>
        <Image
          style={styles.CongratImage}
          source={require("../assets/cartoonBiz.jpg")}
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
      <View>
        <TouchableOpacity>
          <Text style={styles.forgortPasswd}>View Quick Guide</Text>
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
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  conText: {
    color: "#070f4e",
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    display: "flex",
    marginBottom: 30,
    marginLeft: 50,
    textAlign: "center",
    justifyContent: "center",
  },
  imageText: {
    color: "black",
    fontSize: 9,
    fontFamily: "Inter_500Medium",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 50,
    width: 246,
    height: 39,
    marginBottom: 40,
  },
  intro: {
    marginRight: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  InStyle: {
    backgroundColor: "#f5ebeb",
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

  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#070f4e",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: 25,
    justifyContent: "center",
    borderRadius: 10,
  },
  CongratImage: {
    display: "flex",
    height: 300,
    width: 300,
    marginBottom: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});
