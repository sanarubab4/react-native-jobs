import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
// import * as SplachScreen from 'expo-splash-screen';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator, View, Text } from 'react-native';
import { COLORS } from '../constants';

// SplashScreen.preventAutoHideAsync();

const SplashView = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading Content...</Text>
      <ActivityIndicator size='large' color={COLORS.primary} />
    </View>
  );
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  // const [appIsReady, setAppIsReady] = useState(false);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return <SplashView />;
  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
