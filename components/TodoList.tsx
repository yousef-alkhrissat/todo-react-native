import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList() {
  // State Hooks
  const [tasks, setTasks] = useState<{id: number, text: string, completed: boolean}[]>([]);
  const [text, setText] = useState('');
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  }
  function deleteTask(id: any) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function toggleCompleted(id: any) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }
  return (
    <View
    style={myStyle.container}
    >
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}
const myStyle = StyleSheet.create({
    container: {
      padding: 30,
      paddingTop: 50,
    }
  })