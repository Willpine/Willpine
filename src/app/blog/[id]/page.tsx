import { getPostData } from '../../../utils/posts';
import Markdown from 'react-markdown';

export default async function BlogPost({ params }: { params: { id: string } }) {
  const allPostData = await getPostData(`${params.id}.md`);
  return (
    <div>
      <section>
        <h1 className=''>{allPostData.data.title}</h1>
        <h2 className=''>{allPostData.data.date}</h2>
        <Markdown className='textContainer'>{allPostData.content}</Markdown>
        <p className=''>
        </p>
      </section>
    </div>
  )
};
