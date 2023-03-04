import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weather = ({ weatherData }) => {
  return (
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherData.locationName}</Text>
        <Text style={styles.title}>{weatherData.temperature}˚</Text>
        <Text style={styles.title}>{weatherData.weatherCondition}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    marginTop: 90,
    marginBottom: 55,
    alignItems: "center",
    paddingLeft: 25,   
  },
  title: {
    flex: 1,
    fontSize: 48,
    color: "black",
  },
});


export default Weather;
