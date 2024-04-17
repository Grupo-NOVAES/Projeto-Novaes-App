import React, { useState } from "react";
import { View, Modal, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./Styles";

const ModalFolder = ({ visible, onClose, onAddFolder }) => {
  const [newFolderName, setNewFolderName] = useState("");

  const handleAddFolder = () => {
    onAddFolder(newFolderName);
    setNewFolderName("");
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar Pasta</Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Nome da Pasta"
            value={newFolderName}
            onChangeText={(text) => setNewFolderName(text)}
            maxLength={20}
            placeholderTextColor={"#6B6D71"}
            fontSize={15}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnAdd} onPress={handleAddFolder}>
              <Text style={{ color: "white", fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
              <Text style={{ color: "white", fontSize: 16.5 }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalFolder;