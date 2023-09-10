import { BsSearch } from "react-icons/bs";
import style from "./SearchBar.module.scss";
import {useTranslation} from "react-i18next";
import { ShowUserMenuProps } from "../../types/Types";


const SearchBar = ({showUserMenu, setShowUserMenu}: ShowUserMenuProps) => {

  const {t} = useTranslation();

  return (
    <form className={style.searchContainer}>
          <input type="text" placeholder={t("search_placehoder")} 
          onClick={() => showUserMenu && setShowUserMenu(false)}
          onFocus={() => showUserMenu && setShowUserMenu(false)}
          />
          <BsSearch className={style.icon} />
    </form>
  )
}

export default SearchBar