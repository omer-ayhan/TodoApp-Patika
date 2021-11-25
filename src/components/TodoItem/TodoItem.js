import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./TodoItem.style";

const TodoItem = ({ todoData }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{todoData.title}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
