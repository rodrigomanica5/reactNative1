import React from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles'

const TaskList = ({ list, renderItem }) => {
    return (
            <FlatList
                style={styles.flatlist}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
    )
}

export default TaskList