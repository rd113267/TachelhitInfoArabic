import {StyleSheet, Platform} from 'react-native';
import {colors} from '../constants';

export default StyleSheet.create({
  outline: {
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    color: colors.white,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    elevation: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    minWidth: 170,
    alignSelf: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: colors.cream,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  },
  storeButton: {
    minWidth: 350,
    alignSelf: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: colors.cream,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  whatsAppButton: {
    position: 'absolute',
    bottom: 10,
    width: 250,
    alignSelf: 'center',
    backgroundColor: colors.cream,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  arabicButton: {
    backgroundColor: colors.cream,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 3,
    minWidth: 180,
  },
  buttonLabel: {
    fontSize: 25,
    color: colors.black,
    marginHorizontal: 5,
    fontFamily:
      Platform.OS === 'ios' ? 'ScheherazadeOTM2A-Regular' : 'ScheherazadeOTM2A',
  },
  videoButtonLabel: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  arabicTitle: {
    fontSize: 40,
    color: colors.white,
    marginTop: -7,
  },
});
