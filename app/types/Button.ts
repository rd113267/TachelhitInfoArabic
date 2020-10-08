import { TextStyle, ViewStyle } from "react-native";

export default interface ButtonProps {
  text: string;
  onPress: () => void;
  icon: string;
  loading?: boolean;
  style: ViewStyle | ViewStyle[];
  labelStyle: TextStyle | TextStyle[];
}