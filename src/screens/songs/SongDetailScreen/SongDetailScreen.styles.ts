import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  trackImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  trackInfo: {
    paddingVertical: 20,
    flex: 1,
  },
  trackTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 25,
  },
  trackText: {
    marginVertical: 14,
    marginHorizontal: 20,
  },
  textRow: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    flex: 1,
  },
  category: {
    fontStyle: 'italic',
    fontWeight: '500',
  },
  divider: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
});

export default styles;
