import { StyleSheet } from "react-native";
import colors from '../../../../color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between'
  },
  container_foto_user: {
    backgroundColor: colors.login,
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 70,
  },
  btnImg: {
    width: 160,
    height: 160,
    borderRadius: 100,
    elevation: 10
  },
  imagem_perfil: {
    width: 160,
    height: 160,
    borderRadius: 100,
    position: "relative",
    elevation: 20,
  },
  imagem_camera: {
    borderRadius: 100,
    backgroundColor: colors.azul_claro,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 7,
    elevation: 20,
  },
  main: {
    height: "80%",
    flexDirection: "column",
    justifyContent: "center",
  },
  container_info_user: {
    height: "60%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  // containerBack: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFF",
  //   borderRadius: 150,
  //   width: "100%",
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: "#007B8F",
  //   marginTop: -30,
  //   marginBottom: 20,
  // },
  // textBack: {
  //   color: "#007B8F",
  //   fontSize: 18,
  //   fontWeight: "500",
  // },
  titleInfoContact: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 14,
    color: '#083C52',
    fontWeight: "500",
    borderBottomWidth: 1,
    borderColor: '#083C52',
    width: '100%'
  },
  texto_contato: {
    color: "#000000",
  },
  campo_input: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginVertical: 20,
  },
  view_input: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
  },
  text_input: {
    fontSize: 17,
    color: "gray",
    fontWeight: "600",
  },
  input_contato: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 17,
    position: 'relative',
  },
  btn_editarContato: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.azul_claro,
    borderRadius: 150,
    padding: 3,
    position: 'absolute',
    right: 0,
    bottom: 5
  },
});

export default styles;
