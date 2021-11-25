import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [toDo, setTodo] = useState([
    {
      id: "1",
      title: "Learn React Native",
      completed: false,
    },
    {
      id: "2",
      title: "Throw out the trash",
      completed: false,
    },
  ]);

  const renderTodo = ({ item }) => <TodoItem todoData={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Yapılacaklar: 0</Text>
        <FlatList data={toDo} renderItem={renderTodo} />
      </View>
      <AddTodo />
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
