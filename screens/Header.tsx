import { View, Image, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import jbs from './../assets/jbs-logo.png'


const Header = () => {
    const tw = useTailwind()
  return (
    <SafeAreaView>
        <View style={tw("w-full h-16")}>
        <Image style={tw("w-32 h-[100%]")} source={jbs}/>
        </View>
    </SafeAreaView>
  )
}

export default Header