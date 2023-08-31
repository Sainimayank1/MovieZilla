import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {theme} from "../theme"
import * as Progress from "react-native-progress"

var { height, width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const Loading = () => {
  return (
    <View style={{width,height}} className="absolute flex-row justify-center items-center bg-transparent">
      <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
    </View>
  )
}

export default Loading