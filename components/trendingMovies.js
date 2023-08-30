import React from 'react'
import { Dimensions, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

var {height,widht} = Dimensions.get("window")
const TrendingMovies = ({data}) => {
    return (
        <View className="mb-8">
        <Text className="text-white text-xl mx-4 mb-5">
        Trending
        </Text>
            <Carousel 
            data={data}
            renderItem={({item})=><MovieCard item={item}/>}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={600}
            itemWidth={400}
            slideStyle={{display:"flex",alignItems:"center"}}
            >

            </Carousel>
    </View>
  )
}

const MovieCard = ({item}) =>
{
    return (
        <TouchableWithoutFeedback>
            <Text className="text-white">Movie</Text>
        </TouchableWithoutFeedback>
    )
} 

export default TrendingMovies