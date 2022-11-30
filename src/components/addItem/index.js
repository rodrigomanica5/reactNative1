import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles'

function InputTask({inputTask, onHandleAddTask, onHandleChange}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={inputTask}
                placeholder="Enter your task"
                onChangeText={onHandleChange}
            />

            <Button
                title='ADD'
                color={"#3E2F5B"}
                onPress={onHandleAddTask}
                disabled={!inputTask}
            />
        </View>
    )
}

export default InputTask