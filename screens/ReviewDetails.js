import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
    </View>
  );
}
