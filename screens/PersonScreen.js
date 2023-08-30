import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../theme";
import { HeartIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/movieList";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : "my-3";

const PersonScreen = () => {
  const [favorite, setFavorite] = useState(true);
  const navigation = useNavigation();
  const [personMovies, setpersonMovies] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back Button */}
      <SafeAreaView
        className={
          "z-50 flex-row justify-between items-center w-full px-4 " +
          verticalMargin
        }
      >
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon
            size={28}
            strokeWidth={2.5}
            color="white"
          ></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <HeartIcon size={35} color={favorite ? "red" : "white"}></HeartIcon>
        </TouchableOpacity>
      </SafeAreaView>

      {/* Person Details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: "red",
            shadowRadius: 40,
            shadowOpacity: 1,
            shadowOffset: { width: 0, height: 5 },
          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
            <Image
              source={require("../assets/images/castImage2.png")}
              style={{ height: height * 0.43, width: width * 0.74 }}
            ></Image>
          </View>
        </View>

        {/* Name */}
        <View className="mt-6">
          <Text className="text-3xl text-white text-center font-bold">
            John Wick
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            London (U.K)
          </Text>
        </View>

        {/* Stats */}
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 font-xs">Male</Text>
          </View>

          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 font-xs">Male</Text>
          </View>

          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 font-xs">Male</Text>
          </View>

          <View className=" px-4 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 font-xs">Male</Text>
          </View>
        </View>
      </View>

      {/* BioGraphy */}
      <View className="my-6 mx-4 space-y-2">
        <Text className="text-white text-lg">Biography</Text>
        <Text className="text-neutral-400 tracking-wide">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
      </View>

      {/* Person Movies */}
      <MovieList data={personMovies} title="All Movies" hideSeeAll={true}></MovieList>
    </ScrollView>
  );
};

export default PersonScreen;
