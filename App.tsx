import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import UserLogin from './screens/UserLogin';
import utilities from './tailwind.json';

export default function App() {
  return (
      // @ts-ignore - TailwindProvider is missing a type defintion
    <TailwindProvider utilities={utilities}>
    <UserLogin/>
  </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
