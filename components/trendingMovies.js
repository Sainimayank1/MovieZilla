import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Text , Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Image500 } from '../api'

var {height,width} = Dimensions.get("window")
const TrendingMovies = ({data}) => {
    const navigation  = useNavigation();

    const handleClick = (items) =>
    {
        navigation.navigate("Movies",items);
    }

    return (
        <View className="mb-8">
        <Text className="text-neutral-800 text-xl mx-4 mb-5">
        Trending
        </Text>
            <Carousel 
            data={data}
            renderItem={({item})=><MovieCard item={item} handleClick={handleClick}/>}
            firstItem={(data.length/2)}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display:"flex",alignItems:"center"}}
            >

            </Carousel>
    </View>
  )
}


const MovieCard = ({item,handleClick}) =>
{
    return (
        <TouchableWithoutFeedback onPress={()=>handleClick(item)} >
            <Image
            source={{uri:Image500(item.poster_path)}}

            style={{
            width:width*0.6,
            height:height*0.5
            }}
            className="rounded-3xl">
            </Image>
        </TouchableWithoutFeedback>
    )
} 

export default TrendingMovies