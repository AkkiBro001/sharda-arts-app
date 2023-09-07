import Container from "../container/Container"
import style from "./Header.module.scss";
import { HiOutlineLogout, HiOutlineMenuAlt1 } from "react-icons/hi"
import { LiaShoppingBagSolid } from "react-icons/lia"
import {AiOutlineClose, AiOutlineHome} from "react-icons/ai";
import {MdOutlineDesignServices} from "react-icons/md";
import {FaBuildingUser} from "react-icons/fa6";
import {FaRegUserCircle} from "react-icons/fa";
import {TiContacts} from "react-icons/ti";
import {BiCategory} from "react-icons/bi";
const Header = () => {
  return (
    <nav className={style.navigation}>
    <section className={style.mobileMenuContainer}>
      
      <div className={style.mobileMenu}>
              <button className={style.closeBtn}><AiOutlineClose/></button>
              <div className={style.links}>
                <a href="#">
                  <AiOutlineHome/>
                  <span>Home</span>
                </a>
                <a href="#">
                  <MdOutlineDesignServices/>
                  <span>Services</span>
                </a>
                <a href="#">
                  <LiaShoppingBagSolid/>
                  <span>My Order</span>
                </a>
                <a href="#">
                  <FaBuildingUser/>
                  <span>About Us</span>
                </a>
                <a href="#">
                  <TiContacts/>
                  <span>Contact Us</span>
                </a>
                <a href="#">
                  <FaRegUserCircle/>
                  <span>Profile</span>
                </a>
                <a href="#">
                  <BiCategory/>
                  <span>Categories</span>
                </a>
                <a href="#">
                  <HiOutlineLogout/>
                  <span>Logout</span>
                </a>

              </div>
      </div>
    </section>
    <Container>
      <section className={style.navMenu}>
        
        <div className={style.mobileMenuIcon}>
          <HiOutlineMenuAlt1 />
        </div>
        <div className={`${style.logo} subTitle`}>
          <h1>Sharada Arts</h1>
        </div>
        <div className={style.cartIcon}>
          <span className={style.cartCounter}>3</span>
          <LiaShoppingBagSolid />
        </div>
      </section>
    </Container>
    </nav>
  )
}

export default Header