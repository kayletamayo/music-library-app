import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const styles = StyleSheet.create({
  filterBtn: {
    width: 50,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  options: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 12,
  },
  iconPlaceholder: {
    height: 30,
  },
  divider: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  }
});

export default styles;