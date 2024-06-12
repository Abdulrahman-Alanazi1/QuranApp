import { SafeAreaView, StyleSheet, } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuraList from './src/screens/SuraLists';
import Sura from './src/screens/Sura';
import HeaderList from './src/components/shared/HeaderList';
import HeaderSura from './src/components/shared/HeaderSura';

SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator()

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    'AmiriQuran-Regular': require('./assets/fonts/AmiriQuran-Regular.ttf'),
    'uthmanic_hafs': require('./assets/fonts/uthmanic_hafs.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded, fontError])
  if (!fontLoaded && !fontError) {
    return null
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SuraList"
              component={SuraList}
              options={{
                headerTitle: () => <HeaderList title={'الفهرس'} />,
                headerStyle: {
                  backgroundColor: 'white',
                  height: 120
                },

              }} />

            <Stack.Screen
              name="Sura"
              component={Sura}
              options={{
                animation: "slide_from_left",
                // headerBackVisible: true,
                // headerTitle: () => <HeaderSura title={'الأية'} />,
                // headerStyle: {
                //   backgroundColor: 'white',
                // },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "rtl"
  },
  quranList: {
    backgroundColor: "white",
    elevation: 3.5,
    borderRadius: 5,
    margin: 4,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  suraName: {
    fontFamily: 'AmiriQuran-Regular',
    fontSize: 20,
  }
});
