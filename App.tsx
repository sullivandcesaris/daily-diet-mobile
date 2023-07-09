import { useFonts, NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'
import { Home } from '@screens/Home';
import { Loading } from "@components/Loading";



export default function App() {

  let [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
  })
  
  if (!fontsLoaded) {
    return null 
  }

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Loading /> : <Home />}
    </ThemeProvider>
  );
}