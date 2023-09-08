import { getIcons } from "../../utils/GetIcons";
import style from "./UserMenuDisplay.module.scss";
import {FaUserSecret} from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import { langTranslation } from "../../utils/utils";

const UserMenuDisplay = () => {

  const {t} = useTranslation();

  return (
    <section className={style.UserMenuDisplay}>
        <div className={style.userImageContainer}>
            <div className={style.userImage}>
              <FaUserSecret className={style.icon}/>
            </div>

            <h2 className={style.userName}>
                <span>{t(langTranslation("Hello"))},</span>
                <span>{t(langTranslation("Guest"))}</span>
            </h2>
        </div>
        
        <div className={style.userSignIn}>
            <p>
              {getIcons('sign in')}
              <span>{t(langTranslation("Sign In"))}</span>
            </p>
        </div>
    </section>
  )
}

export default UserMenuDisplay