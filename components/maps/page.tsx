import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import { useState, useEffect } from 'react'
import * as Location from 'expo-location';
const seattleReg = {
    latitude: 47.6062,
    longitude: -122.3321,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

// export default function Map() {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {

//         (async () => {

//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//             console.log(location)
//         })();
//     }, []);

//     let text = 'Waiting..';
//     if (errorMsg) {
//         text = errorMsg;
//     } else if (location) {
//         text = JSON.stringify(location);
//     }
//     return (
//         <View style={styles.container}>
//             <Text>{location}</Text>
//             {/* <MapView style={styles.map} initialRegion={location}><Marker coordinate={location} /></MapView> */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         flex: 1, //the container will fill the whole screen.
//         justifyContent: "flex-end",
//         alignItems: "center",

//     },
//     map: {
//         width: '100%',
//         height: '100%',
//     },
// });



export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
        </View>
    );
}