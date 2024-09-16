import { getPostData } from '../../../utils/posts';
import Markdown from 'react-markdown';

interface Post {
  allPostData: {
    id: string, date: string, title: string
  }[]
};

export default async function BlogPost({ params }: { params: { id: string } }) {
  const allPostData = await getPostData(`${params.id}.md`);
  return (
    <div>
      <section>
        <h2 className='bg-black m-2'>{allPostData.data.title}</h2>
        <h2 className='bg-black m-2'>{allPostData.data.date}</h2>
        <Markdown className='bg-black p-8'>{allPostData.content}</Markdown>
        <p className='bg-black m-2'>
        </p>
      </section>
    </div>
  )
};
