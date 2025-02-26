import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootRouter } from './page/router.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootRouter />
  </BrowserRouter>
)
