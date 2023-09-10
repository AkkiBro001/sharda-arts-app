import style from "./Header.module.scss";
import "../../animation.scss";
import Container from "../container/Container"
import { HiOutlineMenuAlt1 } from "react-icons/hi"

import { BsCart3 } from "react-icons/bs";
import UserMenuDisplay from "./UserMenuDisplay";
import { useState, useEffect } from "react";
// import { DefaultNavMenu, UserNavMenu, UserMenuForDesktop } from "./DataForHeader";
import { DefaultNavMenu, GuestNavMenu, GusetMenuForDesktop, showSerchBarInFollowingPath } from "./DataForHeader";
import { getIcons } from "../../utils/GetIcons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import { FaUserSecret } from "react-icons/fa";
// import {profileImage} from "../../assets";
import { en_logo, rg_logo } from "../../assets";


import { useTranslation } from 'react-i18next';
import { langTranslation } from "../../utils/utils";
import { useCurrentLang } from "../../context/LangContext";
import SearchBar from "../searchBar/SearchBar";
import MobileDropdwonMenu from "./MobileDropdwonMenu";
import { ShowMobileMenu } from "../../types/Types";




const Header = () => {

  const {t} = useTranslation();

 
  const [showMobileMenu, setShowMobileMenu] = useState<ShowMobileMenu>("");
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const currentPath = useLocation()

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
      <MobileDropdwonMenu 
      showMobileMenu={showMobileMenu} 
      setShowMobileMenu={setShowMobileMenu} 
      dropDownMenu={GuestNavMenu}
      />
      

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

        {/* //!Serach Bar ===================================> */}
        {showSerchBarInFollowingPath.includes(currentPath.pathname) && <SearchBar showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu}/>}
        
        
      </Container>
    </nav>
  )
}

export default Header