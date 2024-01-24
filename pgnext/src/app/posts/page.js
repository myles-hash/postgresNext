import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function PostsPage() {
    const posts = await sql`
    SELECT * FROM posts
    `;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.rows.map((post) => {
                    return (<Link href={`/posts/${post.id}`} key={post.id}>{post.title}</Link>
)})}
            </ul>
        </div>
    );
}