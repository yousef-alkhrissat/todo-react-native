import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ task, deleteTask, toggleCompleted }: any) {
  return (
    <View style={myStyle.todoItem}>
      <Switch
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <Text style={[myStyle.todoItemText, task.completed && myStyle.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={myStyle.deleteButton}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const myStyle = StyleSheet.create({
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
    },
    todoItemText: {
        flex: 1,
        marginRight: 8,
        color: '#333',
      },
        completed: {
          textDecorationLine: 'line-through',
          color: '#888',
        },
        deleteButton: {
            backgroundColor: '#ff6347',
            color: '#fff',
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
          },
  })