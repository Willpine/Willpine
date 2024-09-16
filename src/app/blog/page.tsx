
import { NextPageContext } from 'next'
import { getSortedPostData } from '../../utils/posts';
import Link from 'next/link';

export default async function Blog() {
  const allPostsData = await getSortedPostData();
  return (
    <div>
      <section>
        <h2 className='bg-black m-2'>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/blog/${id}`}>
              <li key={id} className='bg-black m-2'>
                {title}
                <br />
                {date}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  )
};
