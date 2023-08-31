import { View, Text, Dimensions, Platform, TextInput, TouchableOpacity,Image, ScrollView, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [Result,setResults] = useState([1,2,3,4,5])
  return (

    <SafeAreaView className="bg-neutral-800 flex-1">
    {/* // SearchBar */}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 font-semibold text-base text-white tracking-wider"
        ></TextInput>

        <TouchableOpacity onPress={()=>navigation.navigate("Home")}
        className="rounded-full p-3 m-1 bg-neutral-500">
          <XMarkIcon size={20} color={"white"}></XMarkIcon>
        </TouchableOpacity>
      </View>

    {/* // Results  */}
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:15}}
    className="space-y-3"
    >

    <Text className="font-semibold text-white ml-1">
      Results({Result.length})
    </Text>
    <View className="flex-row flex-wrap justify-between">
      {
        Result.map((item,index)=>
        {
          <TouchableWithoutFeedback key={index}
          onPress={()=>{navigation.navigate('push',item)}}>

          <Image
          ></Image>

          </TouchableWithoutFeedback>
        })
      }
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
