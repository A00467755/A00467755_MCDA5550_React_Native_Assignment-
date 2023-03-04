import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "../components/Weather";

import { API_KEY } from "../utils/WeatherAPIKey";
import * as Location from "expo-location";


export default function App({ navigation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    locationName: "",
    weatherCondition: "",
    conditionIcon: "",
  });


  const fetchWeather = (latitude = 25, longitude = 25) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setWeatherData({
          temperature: json.main.temp,
          locationName: json.name,
          weatherCondition: json.weather[0].main,
          conditionIcon: json.weather[0].icon,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  
  useEffect(() => {
    
    (async () => {
    // don't forget to have a state for loading to show a loading message until the data is fetched
    setIsLoading(true);
  
    /*
    // Get Permission
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }

    // Get location (if permission granted)
    let location = await Location.getCurrentPositionAsync({});
    */

    // Fetching data
    fetch(
     // `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=${API_KEY}&units=metric`
     `http://api.openweathermap.org/data/2.5/weather?lat=44.6476&lon=-63.5728&APPID=${API_KEY}&units=metric`
     )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setWeatherData({
          temperature: json.main.temp,
          locationName: json.name,
          weatherCondition: json.weather[0].main,
          // create a state for the weather data
          // add whatever data you want from the open weather api
        });
  
        // when the weather data is set, isLoading should be changed back
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    })()
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Fetching the weather data...</Text>
      ) : (
        <Weather weatherData={weatherData} />
      )}
      {error && <Text style={{ color: "red" }}>An error has occurred!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  loadingText: {
    color: "black",
  },
});

