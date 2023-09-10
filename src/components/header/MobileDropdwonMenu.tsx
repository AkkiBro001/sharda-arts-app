import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import UserMenuDisplay from "./UserMenuDisplay";
import { getIcons } from "../../utils/GetIcons";
import { langTranslation } from "../../utils/utils";
import {useTranslation} from "react-i18next";
import { NavMenuForGuest, NavMenuForUser, ShowMobileMenuProps } from "../../types/Types";

export interface MobileDropdownMenuProps extends ShowMobileMenuProps{
    dropDownMenu: NavMenuForGuest[] | NavMenuForUser[],
}



const MobileDropdwonMenu = ({showMobileMenu, setShowMobileMenu, dropDownMenu}:MobileDropdownMenuProps) => {

  const {t} = useTranslation()
 
  return (
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
              dropDownMenu.map(({ path, name }) => (
                <Link to={path} key={name} className={style.link}>
                  {getIcons(name.toLowerCase())}
                  <span>{t(langTranslation(name))}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
  )
}

export default MobileDropdwonMenu