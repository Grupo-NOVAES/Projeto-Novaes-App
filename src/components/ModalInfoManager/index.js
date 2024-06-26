import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import * as ImagePicker from "expo-image-picker";

const ModalInfoManager = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [login, setLogin] = useState(initialData.login);
  const [office, setOffice] = useState(
    initialData.office
  );
  const PlaceholderImage = require("../../img/IconProfile.png");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    onSubmit({ name, lastName, login, office });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Informações do gestor</Text>
          <Image
            source={selectedImage ? { uri: selectedImage } : PlaceholderImage}
            style={styles.imagem_perfil}
          />
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Sobrenome"
              value={lastName}
              onChangeText={setLastName}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Email"
              value={login}
              onChangeText={setLogin}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Cargo"
              value={office}
              onChangeText={setOffice}
              style={styles.inputs}
            />
          </View>

          <TouchableOpacity onPress={onClose} style={styles.btnOk}>
            <Text style={styles.txtButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInfoManager;
