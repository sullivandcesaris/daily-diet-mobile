import React from "react";
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'
import { Loading } from "@components/Loading";
import { Routes } from "@routes"

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
        {!fontsLoaded 
          ? 
            <Loading /> 
          : 
            <Routes />
        }
      </ThemeProvider>
  );
}