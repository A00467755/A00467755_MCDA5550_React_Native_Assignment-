import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function ScreenButton({ title, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: "#A030A0" }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ScreenButton;

const styles = StyleSheet.create({
  gridItem: {
    
    margin: 8,
    height: 38,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color:"white"
  },
});
