import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { MdOutlineDesignServices } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { BiCategory } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import { LiaUserPlusSolid } from "react-icons/lia";
import {LiaLanguageSolid} from "react-icons/lia"

export const getIcons = (iconName: string) => {
  switch (iconName) {
    case "home": return <AiOutlineHome />;
    case "logout": return <HiOutlineLogout />;
    case "my orders": return <LiaShoppingBagSolid />;
    case "services": return <MdOutlineDesignServices />;
    case "profile": return <FaRegUserCircle />;
    case "about us": return <FaBuildingUser />;
    case "contact us": return <TiContacts />;
    case "categories": return <BiCategory />;
    case "sign in": return <LiaUserEditSolid />;
    case "sign up": return <LiaUserPlusSolid />;
    case "change language": return <LiaLanguageSolid/>;
    default: return <></>;
  }
}






