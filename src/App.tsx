import { useEffect, useState } from "react"
import LangaugePopup from "./components/languagePopup/LangaugePopup"
import { useCurrentLang } from "./context/LangContext"
import Header from "./components/header/Header"



function App() {

    const {currentLang} = useCurrentLang()
    const [langPopup, setShowLangPopup] = useState<boolean | null>(JSON.parse(JSON.stringify(localStorage.getItem("isVisitedLangPopup"))))
    
    

    useEffect(()=>{
        if(currentLang === "hn" || currentLang === "mr"){
            document.body.setAttribute("data-lang", "hn-mr")
        }else{
          document.body.setAttribute("data-lang", "en")
        }
    },[currentLang])

    return (
      <div className="App">
      {!langPopup && <LangaugePopup setShowLangPopup={setShowLangPopup}/>}
      <Header/>
      </div>
    )
}

export default App
