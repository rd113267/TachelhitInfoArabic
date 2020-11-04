import React, {FunctionComponent} from 'react';
import Video from 'react-native-video';
import AudioProps from '../../types/Audio';

const Audio: FunctionComponent<AudioProps> = ({
  paused,
  uri,
  onBuffer,
  onEnd,
}) => {
  return (
    <Video
      paused={paused}
      audioOnly
      source={{uri}} // Can be a URL or a local file.
      onBuffer={onBuffer}
      onError={(error) => console.log(error)}
      playInBackground
      playWhenInactive
      ignoreSilentSwitch="ignore"
      onEnd={onEnd}
    />
  );
};

export default Audio;
