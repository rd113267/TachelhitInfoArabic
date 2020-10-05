import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  arabic: {
    fontFamily:
      Platform.OS === 'ios' ? 'ScheherazadeOTM2A-Regular' : 'ScheherazadeOTM2A',
  },
  arabicBold: {
    fontFamily:
      Platform.OS === 'ios' ? 'ScheherazadeOTM2A-Regular' : 'Scheherazade-Bold',
  },
  tifinaghe: {
    fontFamily: 'TamazightTifinaghe',
  },
  imgBackground: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
