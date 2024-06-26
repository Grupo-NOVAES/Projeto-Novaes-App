import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ModalConfirmacao = ({ visible, onConfirm, onCancel, contract_id, status, title, description, dateHour }) => {

  const handleConcluededProgress = () => {
    console.log("Concluido:", {contract_id, status, title, description, dateHour });
    onConfirm({contract_id, status, title, description, dateHour });
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Deseja Concluir a Etapa?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleConcluededProgress}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
              <Text style={{ color: "white", fontSize: 16.5 }}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmacao;
