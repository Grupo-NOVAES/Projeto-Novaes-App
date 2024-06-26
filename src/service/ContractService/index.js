import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const fetchDirectories = async (parentDirectoryId = null) => {
  try {
    const response = await axios.get(`${url}/archive/directory`, {
      params: {
        parentDirectoryId: parentDirectoryId
      }
    });
    
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhuma pasta encontrada na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar diretórios:", error);
    return [];
  }
};

const fetchFiles = async (id_directory) => {
  console.log(id_directory);
  try {
    const response = await axios.get(`${url}/archive/getArchiveOfDirectory/${id_directory}`);
    console.log(id_directory);
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhum arquivo encontrado na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar arquivos requisição:", error);
    return [];
  }
};






const addFolder = async (folderName, parentDirectoryId) => {
  try {    
    if (parentDirectoryId >= 1) {
      const response = await axios.post(`${url}/archive/directory`, {
        name: folderName,
        parentDirectory: {
          id: parentDirectoryId
        }
      });
      console.log("RESPOSTA CONSOLE", JSON.stringify(response)); 
      return response.data;
    }
  } catch (error) {
    console.error('Erro ao adicionar pasta:', error);
    throw error;
  }
};



const deleteFolder = async (folderId) => {
  try {
    const response = await axios.delete(`${url}/archive/directory/${folderId}`);
    console.log("Pasta excluída com sucesso");
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir pasta:", error);
    throw error;
  }
};

const updateFolder = async (folderId, folderName) => {
  try {
    const response = await axios.put(`${url}/archive/directory/${folderId}`, { name: folderName });
    console.log("Pasta editada com sucesso");
    return response.data;
  } catch (error) {
    console.error("Erro ao editar pasta:", error);
    throw error;
  }
};

export default {fetchFiles, fetchDirectories, addFolder, deleteFolder, updateFolder };
