import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { PostLoginData } from "../api";
import Modal from "react-native-modal";

const LoginScreen = () => {
  const [isVisible, SetVisible] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState({ email: "", password: "" });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isError, setIsError] = useState(true);
  const [msg, setMsg] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function get() {
      try {
        const data = await AsyncStorage.getItem("movieZilla");
        if (data) {
          // navigation.navigate("Home")
        }
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const resp = await PostLoginData(data);
    setLoading(false);
    if (resp.status == 400) {
      setIsError(true);
    } else {
      setIsError(false);
      const data = JSON.stringify(resp.data.details);
      await AsyncStorage.setItem("movieZilla", data);
    }
    setModalVisible(true);
    setMsg(resp.data.msg);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{ height: hp(110), width: wp(100) }}
      className="bg-white"
    >
      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View className="flex-1 flex items-center justify-center  ">
          <View
            className=" flex-col p-4 rounded-2xl space-y-3 bg-white/100 "
            style={{ height: hp(20), width: wp(80) }}
          >
            <TouchableOpacity
              className="flex items-end"
              title="Hide modal"
              onPress={toggleModal}
            >
              <XMarkIcon color={"black"} size={35} />
            </TouchableOpacity>
            <Text
              className={
                isError
                  ? "text-red-500 text-2xl font-bold tracking-widest"
                  : "text-green-600 text-2xl font-bold tracking-widest"
              }
            >
              {isError ? "Error" : "Success"}
            </Text>
            <Text className="text-md text-neutral-500">{msg}</Text>
          </View>
        </View>
      </Modal>

      {/* Upper section */}
      <View
        style={{ height: hp(40) }}
        className=" mb-5 relative bg-onahau-500"
      >
        <Image
          source={require("../assets/images/personwithlap.png")}
          style={{ width: wp(60), height: wp(60), opacity: 1 }}
          className="absolute -bottom-11 right-1"
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
              className=" text-lg"
              onChangeText={(text) => setData({ ...data, email: text })}
            ></TextInput>
          </View>

          {/* Password */}
          <View className="w-full border border-neutral-400 rounded-lg flex-row justify-between items-center p-2">
            <TextInput
              placeholder="Password"
              secureTextEntry={!isVisible}
              className=" text-lg flex-1"
              onChangeText={(text) => setData({ ...data, password: text })}
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
          <TouchableOpacity
            disabled={isLoading}
            className="bg-onahau-200 p-2 rounded-lg"
            style={{backgroundColor:"#0EABF8"}}
            onPress={() => handleSubmit()}
          >
            <Text className="text-center text-xl font-bold">
              {isLoading ? "Loading..." : "Log in"}
            </Text>
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
              <Text className=" text-center text-lg"
              style={{color:"#0EABF8"}}>
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
