import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#282120",
            headerStyle: {
              backgroundColor: "#FAD02C",
            },
            headerTitleStyle: {
              color: "#282120",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{ title: "Home" }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Feedback"
            options={{ title: "Feedback" }}
            component={FeedbackScreen}
          />
          <Stack.Screen
            name="Weather"
            options={{ title: "Weather" }}
            component={WeatherScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
