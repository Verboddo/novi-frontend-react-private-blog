import posts from '../posts.json'
import { useParams } from "react-router-dom";

function Blogs() {
    const { blogPage } = useParams()

    const filteredPosts = posts.filter( (post) => post.id === blogPage )

    const thisPost = filteredPosts[0]

    return (
        <article>
            <h1>{thisPost.title}</h1>
            <h2>{thisPost.date}</h2>
            <p>{thisPost.content}</p>
        </article>
    )
}

export default Blogs