import { Link } from "react-router-dom";
import { en_logo, primaryBg, rg_logo } from "../../assets";
import style from "./Signup.module.scss";
import { useCurrentLang } from "../../context/LangContext";
import { useTranslation } from "react-i18next";



const Signup = () => {

    const {t} = useTranslation()
    const { currentLang } = useCurrentLang()

    return (
        <section className={style.signUp}>
            <img src={primaryBg} alt="bg" className={style.bg} />
            <img src={currentLang === "en" ? en_logo : rg_logo} alt="logo" className={style.logo} />
            <div className={style.formContainer}>
                <h1 className={style.title}>{t("create_account")}</h1>
                <form className={style.signUpForm}>
                    <div className={style.inputContainer}>
                        <label htmlFor="name">{t("name")}</label>
                        <input type="text" placeholder={t("name_placeholder")} id="name" />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="email">{t("email")}</label>
                        <input type="email" placeholder={t("email_placeholder")} id="email" />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="mobile">{t("mobile_no")}</label>
                        <input type="tel" placeholder={t("mobile_placeholder")} id="mobile" />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="password">{t("password")}</label>
                        <input type="password" placeholder={t("password_placeholder")} id="password" />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="cpassword">{t("cpassword")}</label>
                        <input type="cpassword" placeholder={t("cpassword_placeholder")} id="cpassword" />
                    </div>


                    <button>{t("sign_up")}</button>
                </form>

                <div className={style.links}>
                    <div className={style.signin}>
                        <span>{t("already_have_account")}{" "}</span>
                        <Link to="/signin">{t("sign_in")}</Link>
                    </div>

                    <div className={style.privacy}>
                        <Link to="/privacy-policy">{t("privacy_policy")}</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Signup;