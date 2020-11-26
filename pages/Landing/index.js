import React from 'react'
import { SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

const session = [
  {
    id: '1',
    title: 'Session 1',
    session: 'Session1'
  },
  {
    id: '2',
    title: 'Session 2',
    session: 'Session2'
  },
  {
    id: '3',
    title: 'Session 3',
    session: 'Splash'
  },
  {
    id: '4',
    title: 'Session 4',
    session: 'Session4'
  }
]

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={session}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.session)}>
            <Text>
              {item.title}
            </Text>
          </TouchableOpacity>
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
    marginVertical: 8,
    marginHorizontal: 16,
  }
})

export default Landing;