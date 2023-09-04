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
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import { Image342, fetchSearchData } from "../api";

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search,setSearch] = useState("");
  const [Result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>
  {
    getSearchData();

  },[search])

  const getSearchData = async () =>
  {
      setLoading(true);
      const data = await fetchSearchData(search)
      setResults(data.results)
      setLoading(false)
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* // SearchBar */}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-400 rounded-full">
        <TextInput onChangeText={(value)=>setSearch(value)}
          placeholder="Search Movie"
          placeholderTextColor={"gray"}
          className="pb-1 pl-6 flex-1 font-semibold text-base text-neutral-800 tracking-wider"
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
                    navigation.navigate("Movies", item);
                  }}
                >
                  <View className="space-y-2 mb-4 rounded-xl">
                    <Image
                      source={{uri:Image342(item.poster_path)}}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    ></Image>
                    <Text className="text-neutral-700 ml-1">
                      {item.original_title.length > 27
                        ? item.original_title.slice(0, 22) + "...."
                        : item.original_title}
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
