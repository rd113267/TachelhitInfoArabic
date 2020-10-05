import React, {FunctionComponent} from 'react';
import Video from 'react-native-video';
import AudioProps from '../../types/Audio';
import {Alert} from 'react-native';

const Audio: FunctionComponent<AudioProps> = ({paused, uri, onBuffer}) => {
  return (
    <Video
      paused={paused}
      audioOnly
      source={{uri}} // Can be a URL or a local file.
      onBuffer={onBuffer}
      onError={(error) => {
        __DEV__
          ? console.warn(error.error.errorString)
          : Alert.alert('Error', error.error.errorString);
      }}
      playInBackground
      playWhenInactive
      ignoreSilentSwitch="ignore"
    />
  );
};

export default Audio;
