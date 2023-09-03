import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { PostRegitserData } from "../api";

const RegisterScreen = () => {
  const [isVisible, SetVisible] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isError, setIsError] = useState(true);
  const [msg, setMsg] = useState("");
  const [isLoading,setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true)
    const resp = await PostRegitserData(data);
    setLoading(false)
    if (resp.status == 400) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setModalVisible(true)
    setMsg(resp.data.msg);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{ height: hp(110), width: wp(100) }}
      className="bg-neutral-100"
    >
      {/* Modal */}
      <Modal isVisible={isModalVisible} >
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
      <View style={{ height: hp(40) }} className="bg-onahau-500 mb-5 relative">
        <Image
          source={require("../assets/images/personwithlap.png")}
          style={{ width: wp(60), height: wp(60), opacity: 1 }}
          className="absolute -bottom-11 right-1"
        ></Image>
      </View>

      {/* Lower sectiorn */}
      <ScrollView >
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
                onChangeText={(text) => {
                  setData({ ...data, name: text });
                }}
                placeholder="Enter full name"
                className=" text-lg"
              ></TextInput>
            </View>

            {/* EMail */}
            <View className="w-full border border-neutral-400 rounded-lg p-2">
              <TextInput
                onChangeText={(text) => {
                  setData({ ...data, email: text });
                }}
                placeholder="Enter email"
                className=" text-lg"
              ></TextInput>
            </View>

            {/* Password */}
            <View className="w-full border border-neutral-400 rounded-lg flex-row justify-between items-center p-2">
              <TextInput
                onChangeText={(text) => {
                  setData({ ...data, password: text });
                }}
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
            <TouchableOpacity 
              disabled={isLoading}
              className="bg-onahau-200 p-2 rounded-lg"
              style={{backgroundColor:"#0EABF8"}}
              onPress={() => handleSubmit()}
            >
              <Text className="text-center text-xl font-bold">{isLoading ? "Loading..." : "Register"}</Text>
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
                <Text className="text-onahau-500 text-center text-lg"
                style={{color:"#0EABF8"}}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
