import {StyleSheet} from 'react-native';
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnVoltar: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    paddingRight: 10,
    justifyContent: "space-around",
  },
  contratos: {
    alignItems: 'center',
    marginRight: -38,
    marginLeft: -30,
  },
  flatList:{
    width: '85%',
  },
  btnBack: {
    height: 50,
    width: 50,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  emptyMessageContainer:{
    height: 250,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  emptyMessage:{
    height: 50,
    alignSelf: "center",
    fontSize: 20,
  },
});



export default styles;