import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Cast = ({ data }) => {
    const navigation = useNavigation();
  const charName = "Jhon wick multer";
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>

      {/* Loop */}
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data &&
          data.map((person, index) => {
            return (
              <TouchableOpacity key={index} className="mx-4 items-center" onPress={()=>navigation.navigate("Person",person)}>
                {/* Image Container */}
                <View className="rounded-full w-20 h-20 overflow-hidden items-center border border-neutral-500">
                  <Image
                    source={require("../assets/images/castImage1.png")}
                    className="rounded-2xl h-24 w-20"
                  ></Image>
                </View>

                {/* Name */}
                <Text className="text-neutral-400 text-xs mt-1 ">
                  {charName.length > 10
                    ? charName.slice(0, 10) + ".."
                    : charName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
