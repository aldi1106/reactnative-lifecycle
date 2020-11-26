import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

// Step 1 - Buat Pages/Component menggunakan SafeAreaview. Set container flex = 1
// Step 2 - menyiapkan data berupa array of object (id, title, dan completed)
// Step 3 - Gunakan FlatList element dari react-native untuk menampilkan list data pada step ke 2
//

const toDoList = [
  {
    id: 1,
    title: 'Prepare learning material PTP',
    completed: false,
  },
  {
    id: 2,
    title: 'Learning React Native',
    completed: false,
  },
  {
    id: 3,
    title: 'Coding FlatList',
    completed: false,
  }
]

const LeftAction = () => (
  <View>
    <Text>Uncompleted</Text>
  </View>
)

const RightAction = () => (
  <View>
    <Text>Done</Text>
  </View>
)

const Session4 = () => {
  const [todos, setToDos] = useState(toDoList);

  const completeToDoList = id => {
    console.log(id)
    const newList = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = true;
      }
      return todo;
    })
    setToDos(newList)
  }

  return (
    <SafeAreaView style={styles.container}>
    <FlatList 
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Swipeable
          renderLeftActions={LeftAction}
          onSwipeableLeftOpen={() => console.log("Uncompleted")}
          renderRightActions={RightAction}
          onSwipeableRightOpen={() => completeToDoList(item.id)}
        >
          <View style={styles.item}>
            <Text style={{
              textDecorationLine: item.completed ? "line-through" : "none"
            }}>
              {item.title}
            </Text>
          </View>
        </Swipeable>
      )}          
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3"
    // marginVertical: 8,
    // marginHorizontal: 16,
  }
})

export default Session4;