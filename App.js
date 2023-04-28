import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CameraButton from './components/button/page';
import Map from './components/map/page'
import Riddle from './components/riddle/page'
import { NativeBaseProvider, Text, Box } from "native-base";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <NativeBaseProvider>

        <View style={styles.heading}>
      <Riddle></Riddle>
        </View>

        <View style={styles.center}>
        <Map></Map>
        </View>

        <View style={styles.bottomContainer}>
        <CameraButton></CameraButton>
        </View>
        
      </NativeBaseProvider>
      <StatusBar style="auto" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064e3b',
  },
  heading: {
    marginTop: 40
  },

  center: {
    marginTop: 40,
    marginBottom: 40
  },

  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
},

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
}
});
