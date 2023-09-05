import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './App.tsx'
import './index.scss'
import Loading from './components/loading/Loading.tsx';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'hn', 'mr'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
        order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
        caches: ['localStorage']
    },
    backend: {
        loadPath: '/languages/locales/{{lng}}/translation.json',
    },
    
  });

  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading/>}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Suspense>
)
