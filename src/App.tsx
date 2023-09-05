import { useEffect } from "react"
import LangaugePopup from "./components/languagePopup/LangaugePopup"


function App() {

    const currentLang = localStorage.getItem("i18nextLng")

    useEffect(()=>{
        if(currentLang === "hn" || currentLang === "mr"){
            document.body.setAttribute("data-lang", "hn-mr")
        }else{
          document.body.setAttribute("data-lang", "en")
        }
    },[currentLang])

    return (
      <div className="App">
      <LangaugePopup/>
      <h2>Sharda Arts</h2>
      <a href="1">adasdasd</a>
      <a href="2">adasdasd</a>
      <a href="3">adasdasd</a>
      </div>
    )
}

export default App
