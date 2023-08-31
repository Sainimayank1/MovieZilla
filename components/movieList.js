import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Image,
} from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Image342 } from "../api";

var { height, width } = Dimensions.get("window");

const MovieList = ({ data, title, hideSeeAll }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.push("Movies", item);
  };

  return (
    <View className="mb-8">
      <View className="flex-row justify-between items-center mx-4">
        {/* Title */}
        <Text className="text-white text-xl">{title}</Text>

        {!hideSeeAll && (
          <TouchableOpacity>
            <Text className="text-lg" style={styles.text}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                handleClick(item);
              }}
            >
              <View className="space-y-1 mr-4 mt-4">
                <Image
                  source={{uri:Image342(item.poster_path)}}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}

                  className="rounded-2xl"
                ></Image>
                <Text className="text-neutral-300 ml-1">
                  {item.original_title
                    ? item.original_title.slice(0, 14) + "..."
                    : item.original_title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
