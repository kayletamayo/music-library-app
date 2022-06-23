import React from 'react';
import { View, TextInput, TextInputProps, StyleProp, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import styles from './Input.styles';

interface Props extends TextInputProps {
  inputStyle?: StyleProp<any>;
  rightIcon?: any;
  onRightIconPress?: () => void;
}

const Input: React.FC<Props> = ({ inputStyle, rightIcon, onRightIconPress, ...rest }) => {
  return (
    <View>
      <View>
        <TextInput {...rest} style={[styles.textInput, inputStyle]} />
      </View>
      {!!rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <View style={styles.rightIcon}>
            <Icon name={rightIcon} size={25} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Input;