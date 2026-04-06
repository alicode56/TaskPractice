import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MApView = () => {
  return (
    <View style={styles.container}>
      <MapViewg
        style={styles.map}
        initialRegion={{
          latitude: 31.5204,
          longitude: 74.3587,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Testing ke liye aik Marker (Dukan ki location) */}
        <Marker 
          coordinate={{ latitude: 31.5204, longitude: 74.3587 }}
          title={"Wholesale Shop"}
          description={"Seller's target shop location"}
        />
      </MapView>
    </View>
  );
};

export default MApView;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Ye poori screen cover kar lega
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Map ko container ke barabar stretch karega
  },
});