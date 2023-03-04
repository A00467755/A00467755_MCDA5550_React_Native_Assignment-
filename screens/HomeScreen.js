import ScreenButton from "../components/ScreenButton";

import { View, Text, Button, StyleSheet } from "react-native";

const Separator = () => <View style={styles.separator} />;

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to my React Native app!</Text>

        <Text  style={styles.title2}>Click on the button to switch screens</Text>

<Separator/>

<ScreenButton
        title="Weather"
        onPress={() => navigation.navigate("Weather")}
      />
      <ScreenButton
        title="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
      </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  title2: {
    fontSize: 16,
    marginVertical: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
