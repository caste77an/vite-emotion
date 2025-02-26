import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';

import { RootRouter } from './page/router.tsx'



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <RootRouter />
        </MantineEmotionProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
