import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import reactDom from "react-dom";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // setCourseGoals((currentCourseGoals)=> [
    //   ...currentCourseGoals,
    //   enteredGoalText,
    // ]);
    setCourseGoals([enteredGoalText, ...courseGoals]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your goals here"
          onChangeText={goalInputHandler}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal) => (
        //   <View key={goal} style={styles.goalItems}>
        //   <Text style={styles.goalText}>{goal}</Text>
        // </View>

        <GoalItem goal={goal}/>
        ))}
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor:'pink',
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "85%",
    marginRight: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },

  goalsContainer: {
    flex: 5,
  },

  // goalItems: {
  //   margin: 8,
  //   borderRadius: 6,
  //   backgroundColor: "blue",
  //   padding: 8,
  // },

  // goalText: {
  //   color: 'white',
  // }
});
