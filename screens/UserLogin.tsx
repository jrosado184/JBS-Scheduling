import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

const UserLogin = () => {
    const tailwind = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tailwind("text-red-500")}>Login</Text>
    </SafeAreaView>
  )
}

export default UserLogin