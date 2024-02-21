import { View,Text,StyleSheet, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { useState } from "react";
import Header from "../../components/header";

import styles from "./styles";
import imgPlus from "../../assets/images/plus.png";
import InfoNoTask from "../../components/infoNoTask";
import Todos from "../../components/todos";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default function Home() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([] as Task[]);

  const [taskDone, setTaskDone] = useState(0);
  const [taskCreated, setTaskCreated] = useState(0);

  function handleAddNewTask() {
    if(newTask === '') return;

    const newTaskToAdd = {
      id: new Date().getTime(),
      title: newTask,
      done: false
    }

    setTasks(oldState => [...oldState, newTaskToAdd]);
    setNewTask('');
    setTaskCreated(taskCreated + 1);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }));
    const foundItem = updatedTasks.find(item => item.id === id);

    if(!foundItem) return;
    
    setTasks(oldState => oldState.filter(task => task.id !== id));
    setTaskCreated(taskCreated - 1);
    setTaskDone(foundItem.done ? taskDone - 1 : taskDone);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }));
    const foundItem = updatedTasks.find(item => item.id === id);

    if(!foundItem) return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
    setTaskDone(foundItem.done ? taskDone + 1 : taskDone - 1);
  }

  interface createTask {
    id: number;
    done: boolean;
  }


  return (
    <>
      <Header />
        <View style={styles.container}>

        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Adicione uma nova tarefa" />
          <TouchableOpacity 
            style={styles.button}
            onPress={handleAddNewTask}
            >
            <Text style={styles.buttonText}>
                <Image source={imgPlus} />
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.details}>
          


          <View style={styles.infoQuantidade}>
            <View>
              <Text style={{color: "#4EA8DE"}}>Criadas {taskCreated}</Text>
            </View>
            <View>
              <Text style={{color: "#8284FA"}}>Concluidas {taskDone}</Text>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Todos 
                title={item.title} 
                done={item.done} 
                onRemove={() => handleDeleteTask(item.id)}
                onDone={() => handleToggleTaskDone(item.id)} 
              />
            )}
            scrollEnabled={true}
            ListEmptyComponent={<InfoNoTask />}

          />

        </View>
        
      </View>
    </>
  );
}