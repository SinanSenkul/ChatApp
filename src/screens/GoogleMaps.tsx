import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMaps = () => {
  return (
    <MapView
      style={styles.mapView}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 40.27735828918142,
        longitude: 29.08972188260545,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        coordinate={{
          latitude: 40.27735828918142,
          longitude: 29.08972188260545,
        }}
      />
    </MapView>
  );
};

export default GoogleMaps;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
