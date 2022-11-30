import React from 'react'
import { Modal, View, Text } from 'react-native'
import { styles } from './styles'

const ModalTask = ({modalVisible}) => {
    return (
        <Modal visible={modalVisible} animationType="fade">
            <View style={styles.modalContainer}>
                <Text>Borrar Item</Text>
            </View>
        </Modal>
    )
}

export default ModalTask