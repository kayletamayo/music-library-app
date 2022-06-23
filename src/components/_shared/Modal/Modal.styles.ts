import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../theme/colors';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    paddingVertical: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalFull: {
    width: width,
  },
  modalNotFull: {
    width: width - 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  modalContent: {
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
