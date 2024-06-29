import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'
import { Home } from '@screens/Home';
import { Loading } from "@components/Loading";



export default function App() {

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
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