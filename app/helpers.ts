import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import {request, PERMISSIONS} from 'react-native-permissions';
import {Platform, Alert, Linking} from 'react-native';
import {VideoDetails} from './types';
const PHONE_NUMBER = '+212642596841';

export const downloadLink = async (
  link: string,
  filename: string,
  pdf?: boolean,
) => {
  const fileType = pdf ? '.pdf' : '.mp3';
  try {
    if (Platform.OS === 'ios') {
      await Share.open({
        url: link,
        saveToFiles: true,
        failOnCancel: false,
        filename: `${filename}${fileType}`,
      });
    } else {
      await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      const res = await RNFetchBlob.config({
        addAndroidDownloads: {
          notification: true,
          useDownloadManager: true,
          path: `${RNFetchBlob.fs.dirs.DownloadDir}/${filename}${fileType}`,
        },
      }).fetch('GET', link);
      if (pdf) {
        RNFetchBlob.android.actionViewIntent(res.path(), 'application/pdf');
      }
    }
  } catch (e) {
    if (Platform.OS === 'ios') {
      Linking.openURL(link);
    } else {
      Alert.alert('Error', e.message);
    }
  }
};

export const openWhatsApp = async () => {
  try {
    await Linking.openURL(`whatsapp://send?phone=${PHONE_NUMBER}`);
  } catch (e) {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL(
          'itms-apps://apps.apple.com/gb/app/whatsapp-messenger/id310633997',
        );
      } else {
        await Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.whatsapp',
        );
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }
};

export const openAwalIwass = async () => {
  try {
    if (Platform.OS === 'ios') {
      await Linking.openURL(
        'itms-apps://apps.apple.com/gb/app/awal-i-wass/id1511054521',
      );
    } else {
      await Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.wordofgodforeachday.arabic',
      );
    }
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};
