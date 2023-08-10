import client from "./contentfulConfig";

export async function getPosts(contentType) {
  const response = await client.getEntries({ content_type: contentType });
  
  return response.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
  }));
}
