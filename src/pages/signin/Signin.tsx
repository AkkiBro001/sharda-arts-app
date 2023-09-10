import { Link } from "react-router-dom";
import { en_logo, googleIcon, primaryBg, rg_logo } from "../../assets";
import style from "./Signin.module.scss";
import { useTranslation } from "react-i18next";
import { useCurrentLang } from "../../context/LangContext";

const Signin = () => {

    const {t} = useTranslation();
    const { currentLang } = useCurrentLang()

    return (
        <section className={style.signIn}>
            <img src={primaryBg} alt="bg" className={style.bg}/>

            <img src={currentLang === "en" ? en_logo : rg_logo} alt="logo" className={style.logo}/>

            <div className={style.formContainer}>

                <h2 className={style.title}>{t("welcome")}</h2>

                <button className={style.googleSignInBtn}>
                    <img src={googleIcon} alt="googleIcon" />
                    <span>{t("sign_with_google")}</span>
                </button>

                <section className={style.divider}>
                    <span>{t("or")}</span>
                </section>

                <form className={style.signInForm}>
                    <input type="text" placeholder={t("email_placeholder")} />
                    <input type="password" placeholder={t("password_placeholder")} />
                    <button>{t("sign_in")}</button>
                </form>

                <div className={style.links}>
                    <div className={style.forSignUp}>
                        <span>{t("no_account")}{" "}</span>
                        <Link to="/signup">{t("sign_up")}</Link>
                    </div>

                    <div className={style.forgotPassword}>
                        <Link to="/">{t("forgot_password")}</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Signin