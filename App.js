import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, Modal, Alert, TextInput, FlatList, SafeAreaView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './App.style';

const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false,
    color: '#ebc59c'
  },
  {
    id: '2',
    title: 'Coding',
    completed: false,
    color: '#bc96e6'
  },
  {
    id: '3',
    title: 'Journaling',
    completed: false,
    color: '#df5e5e'
  }
]

export default function App() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNewTodo = () => {
    let newTodo = {
      id : items.length + 1,
      title: text,
      completed: false,
      color: '#62b599'
    }
    setItems([...items, newTodo]);
    setText('');
    setIsModalVisible(false);
  }

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = item.completed ? {...items[itemIndex], completed: false} : {...items[itemIndex], completed: true};
      setItems(updatedItems);
    }
  }

  const TodoItem = (props) => (
    <TouchableOpacity style={[styles.item, {backgroundColor: props.item.color}]} onPress={() => markItemCompleted(props.item)}>
      <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.title}</Text>
    </TouchableOpacity>
  )

  const renderAddButton = () => {
    return (
      <TouchableOpacity style={styles.addTodoView} title='add an item' onPress={() => setIsModalVisible(true)}>
          <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.input} onChangeText={setText} value={text} />
            <Button title='Add Todo' onPress={addNewTodo}/>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={renderAddButton}
        />
    </SafeAreaView>
  );
}