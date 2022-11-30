import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles'
import { InputTask, ModalTask, TaskItem, TaskList } from './components';

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

  const onHandleChange = (task) => setInputTask(task)

  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleRemoveTask={onHandleRemoveTask} />
  )

  // const changeBackgroundColor = () => {
  //   const bgColors = ["#04E762", "#DC0073", "#271033", "#008BF8", "#FA8334"]
  //   return bgColors[Math.floor(Math.random() * bgColors.length)]
  // }

  return (
    <View style={styles.container}>
      <InputTask inputTask={inputTask} onHandleAddTask={onHandleAddTask} onHandleChange={onHandleChange} />
      <View style={styles.itemsContainer}>
        <View>
          <Text style={styles.itemsTitle}>{`things to do`.toUpperCase()} {`(${list.length}/10)`}</Text>
        </View>
        <TaskList list={list} renderItem={renderItem} />
        <ModalTask modalVisible={modalVisible} />
      </View>
    </View>
  );
}
