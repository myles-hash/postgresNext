import { sql } from "@vercel/postgres";


export default async function SinglePostPage( { params }) {

    const posts = await sql`
    SELECT * FROM posts WHERE id = ${params.id}
    `;
    
    return (
        <ul>
                {posts.rows.map((post) => {
                    return (<div key={post.id}>
                        <h1>{post.title}</h1>
                        <h2>{post.content}</h2>
                        </div>
                    )
})}
            </ul>
    )

}