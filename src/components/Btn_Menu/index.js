import React, {useRef} from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import { DrawerActions } from '@react-navigation/native';
import DrawerNavigator from '../DrawerNavigator'; // Importe o componente do DrawerNavigator

const Btn_Menu = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer()); // Dispare a ação openDrawer() usando dispatch
  };

  return (
    <TouchableOpacity onPress={handleOpenDrawer}>
      <Icon name="menu" size={50} color={"#fff"}></Icon>
    </TouchableOpacity>
  );
};

export default Btn_Menu;
