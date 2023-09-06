import React from "react";
import style from "./Container.module.scss";

interface Props {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <section className={style.container}>
        {children}
    </section>
  )
}

export default Container