import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../theme/colors';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  search: {
    width: width - 100,
  },
  sectionTitleView: {
    backgroundColor: colors.lightGray,
    paddingVertical: 12,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  section: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
  },
  songTitle: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});

export default styles;