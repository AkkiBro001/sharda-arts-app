export interface ArticleProp {
  heading: string,
  contents: string[],
}

const Article = ({heading, contents}: ArticleProp) => {
  return (
    <article>
        <h2>{heading}</h2>

        {
          contents.map((content, id) => <p key={id}>{content}</p>)
        }
    </article>
  )
}

export default Article