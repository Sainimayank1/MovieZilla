import {
  View,
  Text,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const SearchScreen = () => {
  const movieName = "Ant Man ^ **sadsssssssss**8 7";
  const navigation = useNavigation();
  const [Result, setResults] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      {/* // SearchBar */}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 font-semibold text-base text-white tracking-wider"
        ></TextInput>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size={20} color={"white"}></XMarkIcon>
        </TouchableOpacity>
      </View>

      {/* // Results  */}
      {loading ? (
        <Loading />
      ) : Result.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="font-semibold text-white ml-1">
            Results({Result.length})
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {Result.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => {
                    navigation.navigate("push", item);
                  }}
                >
                  <View className="space-y-2 mb-4">
                    <Image
                      source={require("../assets/images/moviePoster2.png")}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    ></Image>
                    <Text className="text-neutral-300 ml-1">
                      {movieName.length > 27
                        ? movieName.slice(0, 22) + "...."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/movieTime.png")}
            className="h-96 w-96"
          ></Image>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
