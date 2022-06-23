import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.black,
    height: 45,
    fontSize: 16,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  rightIcon: {
    position: 'absolute',
    height: 45,
    width: 45,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;