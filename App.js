import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CameraButton from './components/button/page';
import Map from './components/map/page'
import Riddle from './components/riddle/page'
import { NativeBaseProvider, Text, Box } from "native-base";
export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Map></Map>
        <Riddle></Riddle>
        <CameraButton></CameraButton>
      </NativeBaseProvider>
      <StatusBar style="auto" />
    </View>
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
