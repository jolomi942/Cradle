import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { appIsReady, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { Inter_500Medium } from "@expo-google-fonts/inter";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faBank, faBarcode, faCircleChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { faAlipay, faGratipay } from "@fortawesome/free-brands-svg-icons";


export function ReceiveMoney({ navigation }) {
  let [inter] = useFonts({
    Inter_500Medium,
  });
  {
    /*<View style={styles.container}>  
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
          </View> */
  }
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Bank")}
          style={styles.arrowLeftIcon}
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            color={"#0e2883"}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.introText}>Receive Money</Text>
      </View>

      <StatusBar style="auto" />

      <View style={styles.InStyle}>
        <FontAwesomeIcon
          icon={faBank}
          color={"#00B2FF"}
          size={30}
        />
        <Text style={styles.InputStyle}>Bank Transfer</Text>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#00B2FF"}
          size={30}
        />
      </View>

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faAlipay} color={"#00B2FF"} size={30} />

        <Text style={styles.InputStyle}>PaymentLink</Text>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#00B2FF"}
          size={30}
        />
      </View>

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faBarcode} color={"#00B2FF"} size={30} />
        <Text style={styles.InputStyle}>Scan QR Code</Text>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#00B2FF"}
          size={30}
        />
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Button title="Continue" style={{ color: "white" }}></Button>
        </TouchableOpacity>
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

  introText: {
    color: "black",
    fontSize: 17,
    fontFamily: "Inter_500Medium",
    marginBottom: 40,
    margin: 20,
  },
  intro: {
    marginRight: 200,
  },
  arrowLeftIcon: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    alignItems: "flex-start",
  },

  InStyle: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    borderRadius: 10,
    width: 350,
  },

  InputStyle: {
    flex: 1,
    fontFamily: "Inter_500Medium",
    margin: 10,
  },

  buttonStyle: {
    height: 50,
    width: 350,
    backgroundColor: "#0e2883",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
    margin: 30,
    justifyContent: "center",
    borderRadius: 10,
  },
  passwrdRules: {
    marginRight: 160,
    color: "red",
  },
});
