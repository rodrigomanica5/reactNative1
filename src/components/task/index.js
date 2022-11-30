import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

const TaskItem = ({item, onHandleRemoveTask}) => {
    return (
        <Text style={styles.text} onPress={() => onHandleRemoveTask(item.id)}>{item.value.toUpperCase()}</Text>
    )
}

export default TaskItem