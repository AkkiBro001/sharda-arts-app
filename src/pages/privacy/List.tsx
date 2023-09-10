import style from "./Privacy.module.scss";

export type ListProps =
    {id: number,
    heading: string,
    content: string,}



const List: React.FC<{lists: ListProps[]}> = ({lists}) => {
  return (
    <ul>

        {
          lists.map(lists => (
              <li key={lists.id}>
                <span className={style.pointHeading}>
                  {lists.heading}{": "}
                </span>

                <span>
                 {lists.content}
                </span>
              </li>
          ))
        }
    </ul>
  )
}

export default List