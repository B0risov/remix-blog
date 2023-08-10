import { useEffect, useState } from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import blogStyles from '~/styles/blog.css';
import client from '~/contentfulConfig';
import PostList from '~/components/PostList';
import { getPosts } from '~/postUtils';

export function links() {
  return [{ rel: "stylesheet", href: blogStyles }];
}

export async function loader() {
  const response1 = await client.getEntries({ content_type: 'Post1' });
  const response2 = await client.getEntries({ content_type: 'Post2' });
  const response3 = await client.getEntries({ content_type: 'Post3' });

  const posts1 = response1.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
  }));

  const posts2 = response2.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
  }));

  const posts3 = response3.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
  }));

  const responseBgColor = await client.getEntries({ content_type: 'BackgroundColor', limit: 1 });
  const backgroundColor = responseBgColor.items[0]?.fields.color || 'white'; 

  return {
    posts1,
    posts2,
    posts3,
    backgroundColor, 
  };
}

export default function Blog() {
  const { posts1, posts2, posts3, backgroundColor } = useLoaderData();

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor; 
  }, [backgroundColor]);

  return (
    <>
      <style>{`body { background-color: ${backgroundColor}; }`}</style> {/* Применяем стили напрямую */}
      <PostList posts={posts1} /> {/* Используем компонент для отображения постов */}
      <PostList posts={posts2} />
      <PostList posts={posts3} />
    </>
  );
}
