import "expo-dev-client";
import { Provider, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingIcon from "./components/UI/SettingIcon";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useEffect } from "react";
import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import store from "./storage";
// import { modalActions } from "./storage/modal-context";

import MainScreen from "./Screens/MainScreen";
import XD from "./Screens/XD";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#0A0A0B" />
        <View style={styles.barContainer}>
          <Text style={styles.descriptionSelectTheardType}>
            Select Theard Type
          </Text>
          <View style={styles.iconContainer}>
            <SettingIcon />
          </View>
        </View>
        {/* <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="XD" component={XD} />
      </Stack.Navigator> */}
        {/* <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#0A0A0B",
            },
            
            // headerRight: () => <SettingIcon />,
            headerTintColor: "white",
          }}
          >
          <Stack.Screen name="XD" component={MainScreen} />
        </Stack.Navigator> */}
        {/* </NavigationContainer> */}
        <MainScreen />
        <BannerAd
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          // unitId={"ca-app-pub-5302417138376979/2140267896"}
          unitId={TestIds.BANNER}
        />
      </Provider>
    </>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text> Open up App.js to start working on your app!!! </Text>
  //     <StatusBar style="auto" />
  //     <BannerAd
  //       size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
  //       unitId={TestIds.BANNER}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textIcon: {
    color: "white",
    // margin: 10,
  },

  descriptionSelectTheardType: {
    color: "white",
    fontFamily: "Inter_700Bold",
    flexGrow: 1,
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
  },

  barContainer: {
    height: "5%",
    backgroundColor: "#0A0A0B",
    display: "flex",
    flexDirection: "row",
  },

  iconContainer: {
    justifyContent: "center",
    marginRight: 10,
  },
});
