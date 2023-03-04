import { View, Text, StyleSheet } from "react-native";

export default function App ({ navigation }) {
  return (
  <View style={styles.bodyContainer}>
  <Text style={styles.title1}>Feedback about the session:</Text>
  <Text style={styles.title2}>
    React native is a quite advanced topic when compared with react and PWA, understanding it in one lesson is difficult. 
    However, the sample codes are very helpful for followup learning. 
    May be it is good to add more introduction on StyleSheet object. Thanks !! 
  </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
    marginBottom: 250,
    width: "100%",
    paddingLeft: 25,  
    paddingRight: 25,  
  },
  title1: {
    flex: 1,
    fontSize: 24,
    color: "black",
  },
  title2: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});