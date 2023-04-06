import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from "react-native";
import React, { appIsReady, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { Inter_500Medium } from "@expo-google-fonts/inter";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faAdd,
  faBank,
  faBarcode,
  faCircleChevronLeft,
  faCirclePlus,
  faFileCirclePlus,
  faHome,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faAlipay, faGratipay } from "@fortawesome/free-brands-svg-icons";

export function AddMoneyProfile({ navigation }) {
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

        <View style={styles.user}>
          <Image
            style={styles.profileImage}
            source={require("../assets/familypix.jpg")}
          />
          <View style={styles.profView}>
            <Text style={styles.profText}>
              John Julius {"\n"} How was your night{" "}
            </Text>
          </View>
          <Text>🌼</Text>
          <Text>🌼</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text>Use Card</Text>

        <Text>536***********679</Text>

        <Text>John Julius Ogunde</Text>
      </View>

      <Text style={styles.useCard}>Use other Cards</Text>
      <StatusBar style="auto" />

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faBank} color={"#00B2FF"} size={30} />
        <Text style={styles.InputStyle}>543********696</Text>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#00B2FF"}
          size={30}
        />
      </View>

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faAlipay} color={"#00B2FF"} size={30} />

        <Text style={styles.InputStyle}>543********696</Text>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          color={"#00B2FF"}
          size={30}
        />
      </View>

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faBarcode} color={"#00B2FF"} size={30} />
        <Text style={styles.InputStyle}>543********696</Text>
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

      <View style={styles.InStyle}>
        <FontAwesomeIcon icon={faCirclePlus} color={"#00B2FF"} size={30} />
        <Text style={styles.InputStyle}>Add New Card</Text>
      </View>

      <View style={styles.buttomIcons}>
        <View>
            <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.arrowLeftIcon}
        ></TouchableOpacity>
          <FontAwesomeIcon icon={faHome} color={"#0e2883"} size={30} />
          <Text>Home</Text>
        </View>

        <View>
            <TouchableOpacity
          onPress={() => navigation.navigate("Add Money")}
          style={styles.arrowLeftIcon}
        ></TouchableOpacity>
          <FontAwesomeIcon icon={faCirclePlus} color={"#00B2FF"} size={30} />
          <Text>Add Money</Text>
        </View>

        <View>
            <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.arrowLeftIcon}
        ></TouchableOpacity>
          <FontAwesomeIcon icon={faUser} color={"#0e2883"} size={30} />
          <Text>Profile</Text>
        </View>
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
    marginRight: 100,
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
    width: 250,
    marginRight: 90,
  },

  InputStyle: {
    fontFamily: "Inter_500Medium",
    width: 250,
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
    marginBottom: 20,
    margin: 10,
    justifyContent: "center",
    borderRadius: 10,
  },

  profileImage: {
    borderRadius: 100,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    
  },

  user: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  profText: {
    padding: 20,
  },
  useCard: {
    textAlign: "left",
    display: "flex",
    margin: 5,
    fontSize: 20,
    fontFamily: "Inter_500Medium",
    marginRight: 100,
  },
  buttomIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 450,
    alignItems: "flex-end",
    marginTop: 10,
  },

  details: {
    backgroundColor: "#E3EAFF",
    padding:20,
    borderRadius: 10,
    width: 350,
    height: 100,
    margin:20
  },
});
