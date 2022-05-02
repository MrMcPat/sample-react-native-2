import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "sample1", rating: 5, body: "sample1", key: "1" },
    { title: "sample2", rating: 4, body: "sample2", key: "2" },
    { title: "sample3", rating: 3, body: "sample3", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("ReviewDetails", {
            itemId: 86,
            otherParam: "whatever",
          })
        }
      /> */}
    </View>
  );
}
