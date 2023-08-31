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
import { Image500, fetchMovieCredits, fetchMovieDetail, fetchMovieSimilar } from "../api";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const { params: items } = useRoute();
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [Similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieDetail(items.id);
    getMovieCredits(items.id);
    getMovieSimilar(items.id);
  }, [items]);

  const getMovieDetail = async (id) => {
    const data = await fetchMovieDetail(id);
    setDetails(data);
  };

  const getMovieCredits = async (id) =>{
    const data = await fetchMovieCredits(id);
    setCast(data.cast);
  }

  const getMovieSimilar = async (id) =>
  {
    const data = await fetchMovieSimilar(id);
    setSimilar(data.results);
  }

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
            source={{ uri: Image500(details.poster_path) }}
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
          {details.original_title}
        </Text>

        {/* Status , release , runtime */}
        <Text className="text-center text-neutral-400 font-semibold text-base">
          {details.status}. {details.release_date} , {details.runtime} min
        </Text>

        {/* Genres */}
        <View className="flex-row justify-center mx-4 space-x-4">
          {details.genres && details.genres.map((genre,index) => {
            return (
              <Text key={index}  className="text-center text-neutral-400 font-semibold text-base">
                {genre.name}
              </Text>
            );
          })}
        </View>

        {/* Description */}
        <Text className="text-neutral-400 mx-4 tracking-wider">
          {
            details.overview
          }
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
