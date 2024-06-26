import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        height: 200,
        width: 360,
        backgroundColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#ebebeb',
        elevation: 15,
        alignItems: 'center',
        borderColor: '#083C52',
        borderWidth: 1,
      },
      title:{
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingTop: 15,
      },
      buttonContainer: {
        height: 100,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'flex-end',
      },
      btnAdd:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '60%',
        backgroundColor: 'white',
        borderRadius: 5,
        backgroundColor: '#00A148',
        borderColor: '#417C5C',
        borderWidth: 1.5,
      },
      btnCancel:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '38%',
        backgroundColor: 'white',
        borderRadius: 5,
        backgroundColor: '#C06F26',
        borderColor: '#975B26',
        borderWidth: 1.5,
      },
})
export default styles;