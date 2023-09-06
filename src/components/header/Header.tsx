import Container from "../container/Container"
import style from "./Header.module.scss";
import {HiOutlineMenuAlt1} from "react-icons/hi"

const Header = () => {
  return (
    <nav className={style.navigation}>
        <Container>
            <div className={style.mobileMenuIcon}>
                <HiOutlineMenuAlt1/>
            </div>
        </Container>
    </nav>
  )
}

export default Header