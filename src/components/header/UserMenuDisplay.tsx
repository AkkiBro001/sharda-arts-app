import { getIcons } from "../../utils/GetIcons";
import style from "./UserMenuDisplay.module.scss";

// import {FaUserSecret} from "react-icons/fa";
import { profileImage } from "../../assets";

import { useTranslation } from 'react-i18next';
import { langTranslation } from "../../utils/utils";

const UserMenuDisplay = () => {

  const {t} = useTranslation();

  return (
    <section className={style.UserMenuDisplay}>
        <div className={style.userImageContainer}>
            <div className={style.userImage}>
              {/* <FaUserSecret className={style.icon}/> */}
              <img src={profileImage} alt="profileImage" />
            </div>

            <h2 className={style.userName}>
                <span>{t(langTranslation("Hello"))},</span>
                <span>{"Akshay Tambe"}</span>
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