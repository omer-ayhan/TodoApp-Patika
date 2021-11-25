import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddTodo.style";

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak..."
        placeholderTextColor="#fff"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
