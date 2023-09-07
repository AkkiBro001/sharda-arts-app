import { useEffect, useState } from "react"
import { useCurrentLang } from "./context/LangContext"
import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GettingStarted from "./pages/gettingStarted/GettingStarted"
import Home from "./pages/home/Home"


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
      {langPopup && <Header/>}
      <Routes>
        <Route path="/" element={<Home langPopup={langPopup}/>}/>
        <Route path="/getting-started" element={<GettingStarted setShowLangPopup={setShowLangPopup} langPopup={langPopup}/>}/>
      </Routes>
      
      </BrowserRouter>
      </div>
    )
}

export default App
