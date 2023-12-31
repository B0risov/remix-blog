import { useLoaderData } from '@remix-run/react';
import blogStyles from '~/styles/blog.css';
import client from '~/contentfulConfig';
import PostList from '~/components/PostList';
import { getPosts } from '~/postUtils';

export function links() {
  return [{ rel: "stylesheet", href: blogStyles }];
}

export async function loader({ params }) {
  const response = await client.getEntry(params.PostId);
  
  if (!response) {
    throw new Error('No posts found');
  }
  
  const post = {
    id: response.sys.id,
    title: response.fields.title,
    content: response.fields.content,
  };
  
  return post;
}

export default function GetPost() {
  const post = useLoaderData();

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  );
}


