import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme/index.js";
import TrendingMovies from "../components/trendingMovies.js"

const ios = Platform.OS == "ios";
const HomeScreen = () => {
 const [trending,setTrending] = useState([1,2,3,4,5])
  return (
    <View className="bg-neutral-800 flex-1">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4  ">
          {/* Left Icon */}
          <Bars3CenterLeftIcon strokeWidth={2} size={30} color={"white"} />

          {/* Center Name */}
          <Text className="text-white text-3xl font-bold">
          <Text style={styles.text}>M</Text>ovieZilla</Text>

          {/* RIght Icon */}
          <TouchableOpacity>
            <MagnifyingGlassIcon strokeWidth={2} size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
      showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:10}}
      >
        {/* Trending movies */}
        <TrendingMovies data={trending} />

      </ScrollView>
    </View>
  );
};

export default HomeScreen;