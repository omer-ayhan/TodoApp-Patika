import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [toDo, setToDo] = useState([]);

  const renderTodo = ({ item }) => (
    <TodoItem setToDo={setToDo} todo={toDo} todoData={item} />
  );
  const toDoLength = toDo.filter((todo) => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Yapılacaklar: {toDoLength}</Text>
        <FlatList data={toDo} renderItem={renderTodo} />
      </View>
      <AddTodo toDo={toDo} setToDo={setToDo} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  title: {
    fontSize: 40,
    color: "#ffa500",
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
  },
});
