import Task2 from "./components/Task2";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const handleText = (val) => {
    setTask(val);
  };
  const handleTask = () => {
    if (task.length > 3) {
      const tasks = {
        text: task,
        key: new Date().getTime().toString(),
      };
      setTaskItems([...taskItems, tasks]);
      setTask("");
      Keyboard.dismiss();
    } else {
      alert("Enter chars>3");
    }
  };
  const completeTask = (index) => {
    const newtask = taskItems.filter((eachObject) => eachObject.key != index);
    setTaskItems(newtask);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Task</Text>
            <View style={styles.items}>
              {taskItems.map((eachObj) => {
                const { text, key } = eachObj;
                return (
                  <TouchableOpacity key={key} onPress={() => completeTask(key)}>
                    <Task2 items={text} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            placeholder="write a task"
            onChangeText={handleText}
            value={task}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => handleTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
