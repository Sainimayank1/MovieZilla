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

const RegisterScreen = () => {
  const [isVisible, SetVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{ height: hp(110), width: wp(100) }}
      className="bg-neutral-100"
    >
      {/* Upper section */}
      <View style={{ height: hp(40) }} className="bg-onahau-100 mb-5 relative">
          <Image
            source={require("../assets/images/personwithlap.png")}
            style={{ width: wp(50), height: wp(50), opacity: 1}}
            className="absolute -bottom-5 right-5"
          ></Image>
      </View>

      {/* Lower sectiorn */}
      <View className="p-5 space-y-3" style={{ height: hp(60) }}>
        {/* Login text */}
        <Text className="text-3xl font-bold">Create your account</Text>
        <Text className="text-neutral-400 text-lg font-semibold mb-10">
          Register is fast and free
        </Text>

        {/* Lower lower section */}
        <View className="space-y-4 h-full">


        {/* Name */}
        <View className="w-full border border-neutral-400 rounded-lg p-2">
          <TextInput
            placeholder="Enter full name"
            className=" text-lg"
          ></TextInput>
        </View>
        
        {/* EMail */}
        <View className="w-full border border-neutral-400 rounded-lg p-2">
          <TextInput
            placeholder="Enter email"
            className=" text-lg"
          ></TextInput>
        </View>

        {/* Password */}
        <View className="w-full border border-neutral-400 rounded-lg flex-row justify-between items-center p-2">
          <TextInput
            placeholder="Create a password"
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
          <Text className="text-center text-xl font-bold">Register</Text>
        </TouchableOpacity>

        {/* Register */}
        <View className="flex-row items-center justify-center">
          <Text className=" text-neutral-400 text-lg font-semibold p-2 ">
           Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex items-center"
          >
            <Text className="text-onahau-500 text-center text-lg">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
