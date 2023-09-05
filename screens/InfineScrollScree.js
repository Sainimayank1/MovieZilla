import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchTopRatedMovies, fetchUpcomingMovies } from "../api";
import { Image342 } from "../api";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { theme } from "../theme";



const ios = Platform.OS == "ios";
var { height, width } = Dimensions.get("window");
const InfineScrollScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { params: containerName } = useRoute();

  const getMovies = async () => {
    setLoading(true);
    if (containerName === "Upcoming") {
      const data = await fetchUpcomingMovies(page);
      if (data && data.results)  setMovies([...movies,...data.results])
      setLoading(false);
    } else {
      const data = await fetchTopRatedMovies(page);
      if (data && data.results) setMovies(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const renderItem = ({ item, index }) => {
    return (
      <View className="flex-1  justify-between bg-neutral-200 mx-1 my-2 py-3 items-center rounded-2xl">
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            navigation.navigate("Movies", item);
          }}
        >
          <View className="space-y-2 mb-4 rounded-xl">
            <Image
              source={{ uri: Image342(item.poster_path) }}
              style={{ width: width * 0.44, height: height * 0.3 }}
              className="rounded-xl"
            ></Image>
            <Text className="text-neutral-700 ml-1 text-lg">
              {item?.original_title?.length > 27
                ? item.original_title.slice(0, 22) + "...."
                : item.original_title}
            </Text>
            <Text className="text-neutral-700 ml-1">
              {item?.overview?.length > 40
                ? item.overview.slice(0, 40) + "...."
                : item.overview}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View>
        <ActivityIndicator size="large" color="#aaa" className="my-6"/>
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView className={ios ? "-mb-2 p-2 " : "mb-3 p-2 "}>
      
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
      <Text className="text-xl mx-4 mt-4 font-bold" style={{color:theme.background}}>{containerName}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 5,
            display: "flex",
            justifyContent: "center",
          }}
          numColumns={2}
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </SafeAreaView>
    // </SafeAreaView>
  );
};

export default InfineScrollScreen;
