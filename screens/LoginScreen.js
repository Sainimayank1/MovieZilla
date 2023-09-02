import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { theme } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [isVisible, SetVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{ height: hp(110), width: wp(100) }}
      className="bg-neutral-100"
    >
      {/* Upper section */}
      <View style={{ height: hp(40) }} className="bg-onahau-100 flex-row items-end justify-center">
          <Image
            source={require("../assets/images/personwithlap.png")}
            style={{ width: wp(60), height: wp(60), opacity: 1 }}
            className=""
          ></Image>
      </View>

      {/* Lower sectiorn */}
      <View className="p-5 space-y-3" style={{ height: hp(60) }}>
        {/* Login text */}
        <Text className="text-3xl font-bold">Login</Text>
        <Text className="text-neutral-400 text-lg font-semibold mb-10">
          Welcome back! Please enter details
        </Text>

        {/* Lower lower section */}
        <View className="space-y-4 h-full">


        
        {/* EMail */}
        <View className="w-full border border-neutral-400 rounded-lg p-2">
          <TextInput
            placeholder="Email"
            className=" text-lg  "
          ></TextInput>
        </View>

        {/* Password */}
        <View className="w-full border border-neutral-400 rounded-lg flex-row justify-between items-center p-2">
          <TextInput
            placeholder="Password"
            secureTextEntry={!isVisible}
            className=" text-lg flex-1"
          ></TextInput>
          {isVisible ? (
            <TouchableOpacity onPress={() => SetVisible(!isVisible)}>
              <EyeIcon color={"black"}></EyeIcon>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => SetVisible(!isVisible)}>
              <EyeSlashIcon color={"black"}></EyeSlashIcon>
            </TouchableOpacity>
          )}
        </View>

        {/* Button */}
        <TouchableOpacity className="bg-onahau-200 p-2 rounded-lg">
          <Text className="text-center text-xl font-bold">Log in</Text>
        </TouchableOpacity>

        {/* Register */}
        <View className="flex-row items-center justify-center">
          <Text className=" text-neutral-400 text-lg font-semibold p-2 ">
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push("Register")}
            className="flex items-center"
          >
            <Text className="text-onahau-500 text-center text-lg">
              Register
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
