import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from 'react-native-paper';
import ButtonProps from '../../types/Button';

const Button: FunctionComponent<ButtonProps> = ({
  text,
  onPress,
  icon,
  loading,
  style,
  labelStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={labelStyle}>{text}</Text>
      {loading ? (
        <ActivityIndicator color="#000" animating size={17} />
      ) : (
        <Icon size={17} name={icon} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
