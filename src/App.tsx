import { useEffect, useState } from "react"
import { useCurrentLang } from "./context/LangContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChooseLanguage from "./pages/language/ChooseLangauge"
import Home from "./pages/home/Home"
import Signin from "./pages/language/signin/Signin"


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
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home langPopup={langPopup}/>}/>
        <Route path="/getting-started" element={<ChooseLanguage setShowLangPopup={setShowLangPopup} langPopup={langPopup}/>}/>
        <Route path="/choose-language" element={<ChooseLanguage setShowLangPopup={setShowLangPopup} langPopup={langPopup}/>}/>


        <Route path="/signin" element={<Signin/>}/>
      </Routes>
      
      </BrowserRouter>
      </div>
    )
}

export default App
