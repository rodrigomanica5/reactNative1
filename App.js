import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';

export default function App() {

  const [inputTask, setInputTask] = useState('')
  const [list, setList] = useState([])

  const onHandleAddTask = () => {

    if ((list.length < 6) && (inputTask.length >= 3)) {
      setList([{ id: Math.floor((Math.random() * 10) + 1).toString(), value: inputTask }, ...list])
      setInputTask('')
    } else {
      setInputTask('')
    }
  }

  const onHandleRemoveTask = (id) => {
    setList(list.filter((x) => x.id != id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputTask}
          placeholder="Choose your pokemon"
          onChangeText={task => setInputTask(task)}
        />
        <Button 
        title='ADD' 
        color={"#3E2F5B"} 
        onPress={onHandleAddTask} 
        disabled={!inputTask}
        style={styles.button} />
      </View>
      <View style={styles.itemsContainer}>
        <View>
          <Text style={styles.itemsTitle}>Selected Pokemons {`(${list.length}/6)`}</Text>
        </View>
        {
          list.map((element, index) => {
            return <Text
              style={styles.text}
              key={index}
              onPress={() => onHandleRemoveTask(element.id)}
            >{element.id} - {element.value.toUpperCase()}</Text>
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDFDF',
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "#3E2F5B",
  },
  itemsContainer: {
    width: "90%",
    height: 400,
    marginHorizontal: 30,
    paddingVertical: 15,
    alignItems: "flex-start",
  },
  itemsTitle: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    width: "85%",
    backgroundColor: "#FB1B1B",
    borderWidth: 1.5,
    borderColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 15,
    color: "#FFFFFF"
  }
});
