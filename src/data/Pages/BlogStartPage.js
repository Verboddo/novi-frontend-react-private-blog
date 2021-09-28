import posts from '../posts.json'
import {Link} from "react-router-dom";

function BlogStartPage() {
    return (
        <div>
            <h1>Blog Overzicht Pagina</h1>
            <h2>Aantal blogposts: {posts.length}</h2>

            {posts.map((post) => <li><Link to={`/blog/${post.id}`}>{post.title}</Link></li>)}

        </div>

    )
}

export default BlogStartPage