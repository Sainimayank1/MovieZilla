import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "../components/movieList";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const { params: items } = useRoute();
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [Similar, setSimilar] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {}, [items]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900 "
    >
      {/* //   Back button with poster */}

      <View className="w-full">
        {/* BAck Button */}
        <SafeAreaView
          className={
            "z-50 absolute flex-row justify-between items-center w-full px-4 " +
            topMargin
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
            <HeartIcon
              size={35}
              color={favorite ? theme.background : "white"}
            ></HeartIcon>
          </TouchableOpacity>
        </SafeAreaView>

        {/* Poster */}
        <View>
          <Image
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          ></Image>
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          ></LinearGradient>
        </View>
      </View>

      {/* Movie details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-4 ">
        {/* Title */}
        <Text className="text-3xl text-center text-white font-bold tracking-wider">
          Ant man 3
        </Text>

        {/* Status , release , runtime */}
        <Text className="text-center text-neutral-400 font-semibold text-base">
          release 2023 , 173 min
        </Text>

        {/* Genres */}
        <View className="flex-row justify-center mx-4 space-x-4">
          <Text className="text-center text-neutral-400 font-semibold text-base">
            Action *
          </Text>
          <Text className="text-center text-neutral-400 font-semibold text-base">
            Trill *
          </Text>
          <Text className="text-center text-neutral-400 font-semibold text-base">
            Adventure
          </Text>
        </View>

        {/* Description */}
        <Text className="text-neutral-400 mx-4 tracking-wider">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>

        {/* Cast */}
        <Cast data={cast}></Cast>

        {/* Similar Movies */}
        <MovieList title="Similar Movies" hideSeeAll={true} data={Similar} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
