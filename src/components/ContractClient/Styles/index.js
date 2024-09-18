import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "95%",
    flexDirection: "row",
    backgroundColor: colors.branco,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 5,
  },

  btnContract: {
    height: 80,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primary,
  },

  concludedTitle: {
    fontSize: 14,
    width: "95%",
    color: colors.primary,
    height: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  concluded: {
    fontSize: 13,
    width: "95%",
    color: colors.primary,
    height: 20,
    textAlign: "center",
  },

  timeTitle: {
    fontSize: 14,
    width: "95%",
    color: colors.primary,
    height: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    width: "95%",
    color: colors.primary,
    height: 20,
    textAlign: "center",
  },

  main: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  maintatus: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  maintime: {
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center",
  },
});

export default styles;
