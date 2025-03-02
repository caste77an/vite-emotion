import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { createTheme, CSSVariablesResolver, MantineProvider } from '@mantine/core';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';
import { RootRouter } from './page/router';


const theme = createTheme({
  fontFamily: "Space Grotesk, sans-serif",
});

const resolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-placeholder": "#737373",
  },
  light: {
    "--mantine-color-placeholder": "#737373",
  },
  dark: {
    "--mantine-color-placeholder": "#737373",
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider stylesTransform={emotionTransform} theme={theme} cssVariablesResolver={resolver} defaultColorScheme='dark'>
        <MantineEmotionProvider>
          <RootRouter />
        </MantineEmotionProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
