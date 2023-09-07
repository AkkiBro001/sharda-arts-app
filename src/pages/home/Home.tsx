import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

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

    

    <div>Home</div>
  )
}

export default Home