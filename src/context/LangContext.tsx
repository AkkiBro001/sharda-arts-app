import {createContext, useState, ReactNode, useContext} from "react";

interface LangProps {
  currentLang: null | string,
  updateLang: (lang:string) => void
}

const LangProvider = createContext<LangProps | null>(null)



const LangContext = ({children}: {children: ReactNode}) => {

  const [currentLang, setCurrentLang] = useState<null | string>(JSON.parse(JSON.stringify(localStorage.getItem("i18nextLng"))))

  function updateLang (lang: string) {
    setCurrentLang(lang)
  }

  return (
    <LangProvider.Provider value={{currentLang, updateLang}}>
          {children}
    </LangProvider.Provider>
  )
}

export default LangContext;
// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentLang = () => useContext(LangProvider) as LangProps;
