import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {colors} from './constants';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.cream,
    accent: colors.black,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default gestureHandlerRootHOC(App);
