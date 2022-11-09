import { StyleSheet, View, Text } from "react-native";

function GoalItem({goal}) {
  return (
    <View key={goal} style={styles.goalItems}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#CDA291",
        padding: 8,
      },
    
      goalText: {
        color: '#414271',
      }
});
