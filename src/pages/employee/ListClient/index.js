import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, Alert, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome";
import Icon_AddUser from "react-native-vector-icons/Ionicons";
import colors from "../../../color";
import ModalInfoClient from "../../../components/ModalInfoClient";
import { getAllClients, getClientDetails, deleteClient } from "../../../service/UserService";

const ClientList = () => {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const navigator = useNavigation();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersList = await getAllClients();
      setClients(usersList);
    } catch (error) {
      console.error("Erro ao obter lista de clientes:", error);
    }
  };

  const fetchClientDetails = async (id) => {
    try {
      const clientDetails = await getClientDetails(id);
      console.log("Detalhes do cliente:", clientDetails);
      setSelectedClient(clientDetails);
      setModalVisibleEdit(true);
    } catch (error) {
      console.error("Erro ao obter detalhes do cliente:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      setClients(clients.filter((client) => client.id !== id));
      Alert.alert("Deletado com sucesso", "O cliente foi deletado com sucesso");
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      Alert.alert("Erro ao deletar", "Houve um erro ao tentar deletar o cliente.");
    }
  };

  const closeModal = () => {
    setModalVisibleEdit(false);
    setSelectedClient(null);
  };

  const handleSubmit = (data) => {
    console.log("Dados atualizados:", data);
    closeModal();
  };

  const filteredClients = clients.filter((client) =>
    `${client.name} ${client.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Pesquisando:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.inputsearch}
            placeholder="Pesquisar clientes"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <TouchableOpacity onPress={handleSearch}>
            <IconSearch name="search" size={28} color={colors.primary} style={styles.iconcamera} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.clientList}>
          {filteredClients.length === 0 ? (
            <Text style={styles.notFoundText}>Contato não encontrado</Text>
          ) : (
            filteredClients.map((client, index) => (
              <TouchableOpacity
                key={index}
                style={styles.btnContato}
                onPress={() => fetchClientDetails(client.id)}
              >
                <Text style={styles.textName}>{`${client.name} ${client.lastname}`}</Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>

        <TouchableOpacity
          style={styles.btnAdd}
          title="Adicionar"
          onPress={() => {
            navigator.navigate("Register");
          }}
          testID={"add-Button"}
        >
          <Icon_AddUser name="person-add" size={35} color={colors.branco} />
        </TouchableOpacity>
      </View>
      <Footer routeSelected={route.name} />

      {selectedClient && (
        <ModalInfoClient
          visible={modalVisibleEdit}
          onClose={closeModal}
          onSubmit={handleSubmit}
          onDelete={() => handleDelete(selectedClient.id)}
          initialData={selectedClient}
        />
      )}
    </View>
  );
};

export default ClientList;