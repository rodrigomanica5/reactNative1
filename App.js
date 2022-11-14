import { useState } from 'react';
import { Button, FlatList, Modal, Text, TextInput, Touchable, View } from 'react-native';
import { styles } from "./styles"

export default function App() {

  const [inputTask, setInputTask] = useState('')
  const [list, setList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState()

  const onHandleAddTask = () => {
    if ((list.length < 10) && (inputTask.length >= 3)) {
      setList([{ id: Math.floor((Math.random() * 1000) + 1).toString(), value: inputTask }, ...list])
      setInputTask('')
    } else {
      setInputTask('')
    }
  }

  const onHandleRemoveTask = (id) => {
    setList(list.filter((x) => x.id != id))
  }


  const renderItem = ({ item }) => (
    <Text style={styles.text} onPress={() => onHandleRemoveTask(item.id)}>{item.value.toUpperCase()}</Text>
  )

  // const changeBackgroundColor = () => {
  //   const bgColors = ["#04E762", "#DC0073", "#271033", "#008BF8", "#FA8334"]
  //   return bgColors[Math.floor(Math.random() * bgColors.length)]
  // }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          value={inputTask}
          placeholder="Enter your task"
          onChangeText={task => setInputTask(task)}
        />

        <Button
          title='ADD'
          color={"#3E2F5B"}
          onPress={onHandleAddTask}
          disabled={!inputTask}
          style={styles.button}
        />
      </View>

      <View style={styles.itemsContainer}>
        <View>
          <Text style={styles.itemsTitle}>{`things to do`.toUpperCase()} {`(${list.length}/10)`}</Text>
        </View>

        <FlatList
          style={styles.flatlist}
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />

        <Modal visible={modalVisible} animationType="fade">
          <View style={styles.modalContainer}>
            <Text>Borrar Item</Text>
          </View>
        </Modal>

      </View>
    </View>
  );
}
