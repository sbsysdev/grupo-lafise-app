/* native */
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/* styles */
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    OpenSans: require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'OpenSans-Medium': require('../assets/fonts/Open_Sans/OpenSans-Medium.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    Poppins: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
