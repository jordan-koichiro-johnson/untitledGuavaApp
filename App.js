import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";

const seattleReg = {
  latitude: 47.6062,
  longitude: -122.3321,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function App() {
  const [location, setLocation] = useState(seattleReg);
  const [errorMsg, setErrorMsg] = useState('');

  const getLocation = (async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    console.log(location.coords.latitude)
    console.log(location.coords.longitude)
    setLocation({
      latitude: location.coords.latitude,
      logitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  })();
  useEffect(() => {
    getLocation()
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}><Marker coordinate={location} /></MapView>
      <Text style={styles.paragraph}>{text}</Text>
      <Button title='locate' onPress={getLocation}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",

  },
  map: {
    width: '100%',
    height: '100%',
  },
});