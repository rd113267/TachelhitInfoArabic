import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default interface HomeProps {
  navigation: NavigationProp;
}
