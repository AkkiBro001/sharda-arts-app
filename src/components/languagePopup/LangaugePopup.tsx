import style from "./LangaugePopup.module.scss";
import Select from 'react-select'
import {HiMiniLanguage} from "react-icons/hi2"
import { focusTrapped, languages } from "../../utils/utils";
import { SelectLang } from "../../types/Types";
import i18next from "i18next";
import {useState, FormEvent, useEffect, useRef} from "react";


const LangaugePopup = () => {

  
  const [selectedOption, setSelectedOption] = useState<SelectLang | null>(languages[0]);
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    i18next.changeLanguage(selectedOption?.value)
  }

  const firstFocusableElement = useRef<HTMLHeadingElement | null>(null)
  const lastFocusableElement = useRef<HTMLButtonElement | null>(null)

  const focusElement = (e: KeyboardEvent) => {
    
    focusTrapped(e, firstFocusableElement.current as HTMLElement, lastFocusableElement.current as HTMLElement)
  }
  

  useEffect(()=>{
    
    // if(!firstFocusableElement.current || !lastFocusableElement.current) return 
    

    window.addEventListener("keyup", focusElement)

    return () => window.removeEventListener("keyup", focusElement)
  }, [firstFocusableElement, lastFocusableElement])

  
  

  return (
    <section className={`${style.languagePopup} langPopup`}>
        <form className={style.content} onSubmit={handleSubmit}>
          <HiMiniLanguage className={style.langIcon}/>
          <h1 className="title"
          ref={firstFocusableElement}
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
                outline: state.isFocused ? '2px solid var(--primary-color)' : 'none',
                outlineOffset: state.isFocused ? '2px' : '0px',
            }),
            container: (baseStyles) => ({
                ...baseStyles,
                fontSize: '1.4rem'
            })
          }}
          />
              
        <button className="button">OK</button>
        <button ref={lastFocusableElement} style={{outline:"none", opacity: 0, border: 0}}></button>
        </form>
    </section>
  )
}

export default LangaugePopup