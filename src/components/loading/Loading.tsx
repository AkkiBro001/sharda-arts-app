import style from "./Loading.module.scss"
import { Bars } from "react-loader-spinner"

interface Props {
    width?: number,
    height?: number
}

const Loading = ({width = 80, height = 80}: Props) => {
    
  return (
    <div className={style.loading}>

    <Bars
      height={height}
      width={width}
      color="#4cb19f"
      ariaLabel="bars-loading"
      visible={true}
      />
    </div>
  )
}

export default Loading