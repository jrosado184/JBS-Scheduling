import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

const UserLogin = () => {
    const tw = useTailwind();
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
 
      // backgroundColor: "black",
  },text: {
    height:"100%"
  }
})

export default UserLogin
