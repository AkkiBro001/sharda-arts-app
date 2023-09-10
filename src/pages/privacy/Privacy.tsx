import Container from "../../components/container/Container";
import Header from "../../components/header/Header"
import Article, { ArticleProp } from "./Article";
import List, { ListProps } from "./List";
import style from "./Privacy.module.scss";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  const your_data_is_safe_with_us = {...t("your_data_is_safe_with_us", { returnObjects: true }) as ArticleProp};

  const how_we_use_your_data = {...t("how_we_use_your_data", { returnObjects: true }) as ArticleProp};

  const your_choices = {...t("your_choices", { returnObjects: true }) as ArticleProp};

  const contact_us_privacy = {...t("contact_us_privacy", { returnObjects: true }) as ArticleProp};
  
  const how_we_use_your_data_list = [...t("how_we_use_your_data_list", { returnObjects: true }) as ListProps[]];

  const your_choices_list = [...t("your_choices_list", { returnObjects: true }) as ListProps[]];

  

  return (
    <>
      <Header />

      <Container>
        <section className={style.privacy}>
          <p className={style.effectiveDate}>
            <span className={style.tag}>{t("effective_text")}{" "}</span>
            <span className={style.date}>{t("effective_date")}</span>
          </p>

          <p className={style.welcomeText}>{t("welcome_text")}</p>

          <Article {...your_data_is_safe_with_us}/>

          <Article {...how_we_use_your_data}/>

          <List lists={how_we_use_your_data_list}/>

          <Article {...your_choices} />

          <List lists={your_choices_list}/>

          <Article {...contact_us_privacy} />


        </section>
      </Container>

    </>
  )
}

export default Privacy