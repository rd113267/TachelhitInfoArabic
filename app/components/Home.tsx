import React, {useState, useRef, useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Platform,
  Alert,
  StatusBar,
  Linking,
  ScrollView,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import styles from '../styles/Home';
import VideoPlayer from 'react-native-video-controls';
import Audio from './commons/Audio';
import {
  ROOT_URL,
  AMSIGGEL_ID,
  JESUS_FILM_URI,
  colors,
  GODS_STORY,
} from '../constants';
import {
  openWhatsApp,
  getVideoDetails,
  downloadLink,
  openAwalIwass,
} from '../helpers';
import Video from 'react-native-video';
import {VideoDetails} from '../types';
import HomeProps from '../types/Home';
import Orientation from 'react-native-orientation-locker';
import Button from './commons/Button';

const Home: FunctionComponent<HomeProps> = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [playing1, setPlaying1] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [paused, setPaused] = useState(true);
  const [jesusPaused, setJesusPaused] = useState(true);
  const [godsStoryPaused, setGodsStoryPaused] = useState(true);
  const [showAmsiggel, setShowAmsiggel] = useState(false);
  const [showJesus, setShowJesus] = useState(false);
  const [showGodsStory, setShowGodsStory] = useState(false);

  const [videoDetails, setVideoDetails] = useState<VideoDetails>();
  const videoRef = useRef<Video>(null);
  const videoRefJesus = useRef<Video>(null);
  const videoRefGodsStory = useRef<Video>(null);

  const [downloadingArabic, setDownloadingArabic] = useState(false);
  const [downloadingLatin, setDownloadingLatin] = useState(false);
  const [downloadingOT, setDownloadingOT] = useState(false);
  const [downloadingNT, setDownloadingNT] = useState(false);
  const [downloadingArabicOT, setDownloadingArabicOT] = useState(false);
  const [downloadingArabicNT, setDownloadingArabicNT] = useState(false);

  const awaliwassArabic = `${ROOT_URL}pdf/awaliwass-ar.pdf`;
  const awaliwassLatin = `${ROOT_URL}pdf/awaliwass-lat.pdf`;
  const latinOT = `${ROOT_URL}pdf/laahd aqdim.pdf`;
  const latinNT = `${ROOT_URL}pdf/laahd l-ljdid.pdf`;
  const arabicOT = `${ROOT_URL}pdf/tashelhayt-ar-ot.pdf`;
  const arabicNT = `${ROOT_URL}pdf/tch-nt-ar.pdf`;

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const videosDetails = await getVideoDetails(AMSIGGEL_ID);
      setVideoDetails(videosDetails);
      setLoading(false);
    };
    getDetails();
  }, []);

  useEffect(() => {
    if (showAmsiggel || showJesus || showGodsStory) {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
    } else {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    }
  }, [showAmsiggel, showJesus, showGodsStory]);

  useEffect(() => {
    if (Platform.OS === 'android' && !Orientation.isLocked()) {
      Orientation.lockToPortrait();
    }
  }, []);

  if (showAmsiggel && Platform.OS === 'android' && videoDetails) {
    return (
      <VideoPlayer
        source={{uri: videoDetails.videoUrl}}
        disableVolume
        disableFullscreen
        paused={paused}
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
        onLoad={() => setPaused(false)}
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
        onBack={() => {
          setShowAmsiggel(false);
          setPaused(true);
        }}
      />
    );
  }
  if (showJesus && Platform.OS === 'android') {
    return (
      <VideoPlayer
        source={{uri: JESUS_FILM_URI}}
        disableVolume
        disableFullscreen
        paused={jesusPaused}
        onPause={() => setJesusPaused(true)}
        onPlay={() => setJesusPaused(false)}
        onLoad={() => setJesusPaused(false)}
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
        onBack={() => {
          setShowJesus(false);
          setJesusPaused(true);
        }}
      />
    );
  }
  if (showGodsStory && Platform.OS === 'android') {
    return (
      <VideoPlayer
        source={{uri: GODS_STORY}}
        disableVolume
        disableFullscreen
        paused={godsStoryPaused}
        onPause={() => setGodsStoryPaused(true)}
        onPlay={() => setGodsStoryPaused(false)}
        onLoad={() => setGodsStoryPaused(false)}
        onError={(e: Error) =>
          __DEV__ ? console.warn(e.message) : Alert.alert('Error', e.message)
        }
        onBack={() => {
          setShowGodsStory(false);
          setGodsStoryPaused(true);
        }}
      />
    );
  }
  return (
    <ImageBackground
      style={globalStyles.imgBackground}
      resizeMode="cover"
      source={require('../images/background.png')}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{paddingBottom: 60}}>
          <Text
            style={[
              globalStyles.tifinaghe,
              styles.title,
              {alignSelf: 'center', fontSize: 44, marginTop: 10},
            ]}>
            taclHit infu
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.title}>tachelhit info</Text>
            <Text
              style={[
                styles.title,
                globalStyles.arabic,
                styles.arabicTitle,
                {color: colors.white},
              ]}>
              تاشلحيت ءينفو
            </Text>
          </View>

          <View style={{marginVertical: 15, flex: 1}}>
            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon={playing ? 'pause' : 'play'}
                loading={loading}
                onPress={() => setPlaying(!playing)}
                text="اموسلم"
              />

              <Audio
                paused={!playing}
                uri={`${ROOT_URL}mp3-testimonies/ma_tssent.mp3`}
                onBuffer={({isBuffering}) => setLoading(isBuffering)}
              />
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon={playing1 ? 'pause' : 'play'}
                loading={loading1}
                onPress={() => setPlaying1(!playing1)}
                text="ءيسقسيتن"
              />
              <Audio
                paused={!playing1}
                uri={`${ROOT_URL}Iseqsitn.mp3`}
                onBuffer={({isBuffering}) => setLoading1(isBuffering)}
              />
            </View>

            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon={playing2 ? 'pause' : 'play'}
                loading={loading2}
                onPress={() => setPlaying2(!playing2)}
                text="اماسيحي"
              />

              <Audio
                paused={!playing2}
                uri={`${ROOT_URL}mp3-testimonies/ssa_n-thuna.mp3`}
                onBuffer={({isBuffering}) => setLoading2(isBuffering)}
              />
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon={playing3 ? 'pause' : 'play'}
                loading={loading3}
                onPress={() => setPlaying3(!playing3)}
                text="لامان ءولا سّلامت"
              />

              <Audio
                paused={!playing3}
                uri={`${ROOT_URL}azuzd_combined.mp3`}
                onBuffer={({isBuffering}) => setLoading3(isBuffering)}
              />
            </View>
            <Text
              style={[
                styles.title,
                globalStyles.arabic,
                {
                  alignSelf: 'center',
                  color: colors.white,
                  marginVertical: 10,
                  marginTop: 10,
                  fontSize: 40,
                },
              ]}>
              ارّاتن ن-سيدي ربّي
            </Text>

            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingArabicOT}
                onPress={async () => {
                  setDownloadingArabicOT(true);
                  await downloadLink(arabicOT, 'لعهد اقديم', true)
                  setDownloadingArabicOT(false);
                }}
                text="لعهد اقديم"
              />

              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingArabicNT}
                onPress={async () => {
                  setDownloadingArabicNT(true);
                  await downloadLink(arabicNT, 'لعهد لّجديد', true)
                  setDownloadingArabicNT(false);
                }}
                text="لعهد لّجديد"
              />
            </View>
            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingOT}
                onPress={async () => {
                  setDownloadingOT(true);
                  await downloadLink(latinOT, 'laahd aqdim', true);
                  setDownloadingOT(false);
                }}
                text="لعهد اقديم"
              />

              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="download"
                loading={downloadingNT}
                onPress={async () => {
                  setDownloadingNT(true);
                  await downloadLink(latinNT, 'laahd l-ljdid', true);
                  setDownloadingNT(false);
                }}
                text="لعهد لّجديد"
              />
            </View>
            <Button
              onPress={openAwalIwass}
              icon={Platform.OS === 'ios' ? 'apple' : 'google-play'}
              style={styles.storeButton}
              labelStyle={styles.buttonLabel}
              text="سفليد ءي-واوال ن-ربّي كرايگاتّ اسّ"
            />

            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={{
                  fontSize: 18,
                  color: colors.black,
                  marginHorizontal: 5,
                  marginVertical: 7,
                }}
                icon="download"
                loading={downloadingLatin}
                onPress={async () => {
                  setDownloadingLatin(true);
                  await downloadLink(awaliwassLatin, 'awaliwass-lat', true);
                  setDownloadingLatin(false);
                }}
                text="awal i-wass"
              />
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                onPress={async () => {
                  setDownloadingArabic(true);
                  await downloadLink(awaliwassArabic, 'awaliwass-ar', true);
                  setDownloadingArabic(false);
                }}
                loading={downloadingArabic}
                text="اوال ءي واسّ"
                icon="download"
              />
            </View>

            <Text
              style={[
                styles.title,
                globalStyles.arabic,
                {
                  alignSelf: 'center',
                  color: colors.white,
                  marginTop: 13,
                  fontSize: 40,
                },
              ]}>
              فيديو
            </Text>

            <View style={styles.buttonRow}>
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="video"
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    videoRefJesus.current?.presentFullscreenPlayer();
                  } else {
                    setShowJesus(true);
                  }
                }}
                text="تودرت لّماسيح"
              />

              <Video
                source={{uri: JESUS_FILM_URI}}
                ref={videoRefJesus}
                paused={jesusPaused}
                onFullscreenPlayerDidPresent={() => setJesusPaused(false)}
                onFullscreenPlayerDidDismiss={() => setJesusPaused(true)}
              />
              <Button
                style={styles.button}
                labelStyle={styles.buttonLabel}
                icon="video"
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    videoRefGodsStory.current?.presentFullscreenPlayer();
                  } else {
                    setShowGodsStory(true);
                  }
                }}
                text="مايلّي ءيقصاد ربّي"
              />

              <Video
                source={{uri: GODS_STORY}}
                ref={videoRefGodsStory}
                paused={godsStoryPaused}
                onFullscreenPlayerDidPresent={() => setGodsStoryPaused(false)}
                onFullscreenPlayerDidDismiss={() => setGodsStoryPaused(true)}
              />
            </View>

            <Button
              style={styles.button}
              labelStyle={[styles.buttonLabel, {marginVertical: 3}]}
              icon="video"
              onPress={() => {
                if (Platform.OS === 'ios') {
                  videoRef.current?.presentFullscreenPlayer();
                } else {
                  setShowAmsiggel(true);
                }
              }}
              text="امودّو ن-ومسيگّل"
            />
            {videoDetails && (
              <Video
                source={{uri: videoDetails.videoUrl}}
                ref={videoRef}
                paused={paused}
                onFullscreenPlayerDidPresent={() => setPaused(false)}
                onFullscreenPlayerDidDismiss={() => setPaused(true)}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <Button
        icon="whatsapp"
        labelStyle={styles.buttonLabel}
        style={styles.whatsAppButton}
        onPress={openWhatsApp}
        text="ساول-اغ-د س-واتساب"
      />
    </ImageBackground>
  );
};

export default Home;
