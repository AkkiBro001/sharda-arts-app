import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Header from "../../components/header/Header";

interface Props {
    langPopup: boolean | null,
}

const Home = ({langPopup}: Props) => {

    const navigate = useNavigate()
    
    useEffect(()=>{
        if(!langPopup){
            navigate("/getting-started")
        }
    }, [langPopup, navigate])



    
  return (

    <>
    <Header/>
    <div>Home</div>
    
    </>
  )
}

export default Home