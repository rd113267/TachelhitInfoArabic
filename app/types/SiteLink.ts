import {ImageURISource, ViewStyle} from 'react-native';

export default interface SiteLinkProps {
  link: string;
  title?: string;
  image?: ImageURISource;
  style?: ViewStyle;
}
