import style from "./ChooseLangauge.module.scss";
import Select from 'react-select'
import { langIcon } from "../../assets";
import { languages } from "../../utils/utils";
import { SelectLang } from "../../types/Types";
import i18next from "i18next";
import {useState, FormEvent, Dispatch, SetStateAction, useEffect} from "react";
import {  useCurrentLang } from "../../context/LangContext";
import { useLocation, useNavigate } from "react-router-dom";
import { primaryBg } from "../../assets";

interface Props {
  setShowLangPopup: Dispatch<SetStateAction<boolean | null>>
  langPopup: boolean | null
}

const ChooseLangauge = ({setShowLangPopup, langPopup}: Props) => {

  const navigate = useNavigate()
  const location = useLocation()

  const { updateLang, currentLang } = useCurrentLang();

  const getCurrentLang = languages.find(lang => lang.value === currentLang) || languages[0];
 
  const [selectedOption, setSelectedOption] = useState<SelectLang | null>(getCurrentLang);
  
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    i18next.changeLanguage(selectedOption?.value)
    localStorage.setItem("isVisitedLangPopup", JSON.stringify(true))
    setShowLangPopup(true)
    updateLang(selectedOption?.value as string)
    navigate("/");
  }

  useEffect(()=>{

    if(langPopup && location.pathname.includes("getting-started")){
      navigate("/");
      }
  },[langPopup, location.pathname, navigate])
  

  return (
    <section className={`${style.languagePopup} langPopup`}>
        <img src={primaryBg} alt="primaryBg" className={style.bg}/>
        <form className={style.content} onSubmit={handleSubmit}>
          <img src={langIcon} alt="" className={style.langIcon}/>
          <h1 className={style.heading}
          tabIndex={0}
          >Choose Your Langauge<br/>अपनी भाषा चुनें / तुमची भाषा निवडा</h1>
          <Select
          autoFocus = {true}
          defaultValue={selectedOption} 
          onChange={setSelectedOption}
          options={languages}
          placeholder="Select Your Language"
          isSearchable={false}
          className="react-select-container"
          classNamePrefix="react-select title"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'var(--primary-opac-color)',
              primary: 'var(--primary-color)',
            },
          })}
          styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'transparent' : 'inherit',
                boxShadow: state.isFocused ? 'none' : 'inherit',
                outline: state.isFocused ? '2px solid var(--primary-dark-color)' : 'none',
                outlineOffset: state.isFocused ? '2px' : '0px',
            }),
            container: (baseStyles) => ({
                ...baseStyles,
                fontSize: '1.4rem'
            })
          }}
          />
              
        <button>OK</button>
        
        </form>
    </section>
  )
}

export default ChooseLangauge