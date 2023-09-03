import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme/index.js";
import TrendingMovies from "../components/trendingMovies.js";
import MovieList from "../components/movieList.js";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading.js";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/index.js";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    setLoading(true);
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    setLoading(true);
    const data = await fetchUpcomingMovies();
    if (data && data.results) setComing(data.results);
    setLoading(false);
  };

  const getTopRatedMovies = async () => {
    setLoading(true);
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
    setLoading(false);
  };

  return (
    // bg-neutral-800
    <View className=" bg-neutral-100 flex-1">
      <SafeAreaView className={ios ? "-mb-2 p-2 " : "mb-3 p-2 "}>
        <StatusBar style={styles} />
        <View className="flex-row justify-between items-center mx-4  ">
          {/* Left Icon */}
          {/* <Bars3CenterLeftIcon strokeWidth={2} size={30} color={"white"} /> */}

          {/* Center Name */}
          <Text className="text-neutral-800 text-3xl font-bold">
            <Text className="text-neutral-900">M</Text>ovieZilla
          </Text>

          {/* RIght Icon */}
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon strokeWidth={2} size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending movies */}
          {trending.length > 0 && <TrendingMovies data={trending} />}

          {/* Upcoming movies */}
          {upcoming.length > 0 && (
            <MovieList title="Upcoming" data={upcoming} />
          )}

          {/* Top Rated Movies*/}
          {topRated.length > 0 && (
            <MovieList title="Top Rated" data={topRated} />
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
