import style from "./Header.module.scss";
import "../../animation.scss";
import Container from "../container/Container"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import { BsCart3, BsSearch } from "react-icons/bs";
import UserMenuDisplay from "./UserMenuDisplay";
import { useState, useEffect } from "react";
// import { DefaultNavMenu, UserNavMenu, UserMenuForDesktop } from "./DataForHeader";
import { DefaultNavMenu, GuestNavMenu, GusetMenuForDesktop } from "./DataForHeader";
import { getIcons } from "../../utils/GetIcons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaUserSecret } from "react-icons/fa";
// import {profileImage} from "../../assets";
import { en_logo, rg_logo } from "../../assets";


import { useTranslation } from 'react-i18next';
import { langTranslation } from "../../utils/utils";
import { useCurrentLang } from "../../context/LangContext";


const Header = () => {

  const {t} = useTranslation();

 
  const [showMobileMenu, setShowMobileMenu] = useState<string>("");
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  

  const { currentLang } = useCurrentLang();

  useEffect(() => {
    if (showMobileMenu !== "slide-out-top") return
    let timer: number | undefined;
    // eslint-disable-next-line prefer-const
    timer = setTimeout(() => {
      setShowMobileMenu("")
      }, 500);

    () => clearTimeout(timer);
  }, [showMobileMenu])

 
  

  return (
    <nav className={style.navigation}
    
    >
      {/* //!Mobile Menu Dropdown =========================> */}
      <section
        className={`${style.mobileMenuContainer} ${showMobileMenu}`}
        tabIndex={0}
        >
        <div className={style.mobileMenu}>
          <button className={style.closeBtn}
            onClick={() => setShowMobileMenu("slide-out-top")}
          ><AiOutlineClose /></button>
          <div className={style.links}>
            <Link to="/signin" className={style.link}>
              <UserMenuDisplay />
            </Link>
            {
              GuestNavMenu.map(({ path, name }) => (
                <Link to={path} key={name} className={style.link}>
                  {getIcons(name.toLowerCase())}
                  <span>{t(langTranslation(name))}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
      

      {/* //!Middle Menu ===================================> */}
      <Container>

        <section className={style.navMenu}>

          <button className={style.mobileMenuIcon} onClick={() => setShowMobileMenu("slide-in-top")}>
            <HiOutlineMenuAlt1 />
          </button>
          <Link className={style.logo} to="/">
            <img src={currentLang === "en" ? en_logo : rg_logo} alt="" />
          </Link>

          <ul className={style.desktopMenuContainer}>

            {
              DefaultNavMenu.map(({ path, name }) => (
                <li key={name}>
                  <Link to={path}>{t(langTranslation(name))}</Link>
                </li>
              ))
            }
          </ul>


          {/* //!Rightside Menu ===================================> */}
          <div className={style.rightMenu}>
            <Link className={style.cartIcon} to="/">
              <span className={style.cartCounter}>3</span>
              <BsCart3 />
            </Link>

            <section className={style.userContainer}>
              <div className={style.userProfile}
              tabIndex={0}
              onClick={()=>setShowUserMenu(pre => !pre)}
              onKeyDown={(e)=>{(e.code === "Space" || e.code === "Enter") && setShowUserMenu(pre => !pre)}}
              >
                <div className={style.userImage}>
                  <FaUserSecret className={style.guestIcon} />
                  {/* <img src={profileImage} alt="profileImage" /> */}
                </div>
                <MdOutlineKeyboardArrowDown 
                className={`${style.downArrowIcon} ${showUserMenu ? style.animate : ""}`}
                />
              </div>

              {showUserMenu && <section className={style.userProfileMenu}>

                <Link to="/signin" className={style.link}>
                  <UserMenuDisplay />
                </Link>
                {
                  GusetMenuForDesktop.map(({ path, name }) => (
                    <Link to={path} key={name} className={style.link}>
                      {getIcons(name.toLowerCase())}
                      <span>{t(langTranslation(name))}</span>
                    </Link>
                  ))
                }

              </section>}

            </section>


          </div>
        </section>



        {/* //!Search Bar ===================================> */}
        <form className={style.searchContainer}>
          <input type="text" placeholder={t(langTranslation("search_placehoder"))} 
          onClick={() => showUserMenu && setShowUserMenu(false)}
          onFocus={() => showUserMenu && setShowUserMenu(false)}
          />
          <BsSearch className={style.icon} />
        </form>
      </Container>
    </nav>
  )
}

export default Header