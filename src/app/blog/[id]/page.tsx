import { getPostData, getSortedPostData } from '../../../utils/posts';
import Markdown from 'react-markdown';
import "../../../css/app/blog/blogpost/blogpost.css";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

  const allPostsData = await getSortedPostData();

  return allPostsData.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const allPostData = await getPostData(`${params.id}.md`);
  return (
    <div>
      <section>
        <h1 className=''>{allPostData.data.title}</h1>
        <h2 className='mb-10'>{allPostData.data.date}</h2>
        <Markdown className='textContainer'>{allPostData.content}</Markdown>
        <p className=''>
        </p>
      </section>
    </div>
  )
};
