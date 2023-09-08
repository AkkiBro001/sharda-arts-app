import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss';
import Loading from './components/loading/Loading.tsx';
import LangContext from './context/LangContext.tsx';
import "./languages/i18LanguageTranslator.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading/>}>
  <React.StrictMode>
    <LangContext>
      <App />
    </LangContext>
  </React.StrictMode>
  </Suspense>
)
