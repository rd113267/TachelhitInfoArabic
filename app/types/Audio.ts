import {OnBufferData} from 'react-native-video';

export default interface AudioProps {
  paused: boolean;
  uri: string;
  onBuffer: (data: OnBufferData) => void;
  onEnd?: () => void;
}
