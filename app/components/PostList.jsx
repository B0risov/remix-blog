import { Link } from '@remix-run/react';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
