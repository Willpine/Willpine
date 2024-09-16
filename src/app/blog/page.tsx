
import { NextPageContext } from 'next'
import { getSortedPostData } from '../../utils/posts';
import Link from 'next/link';

export default async function Blog() {
  const allPostsData = await getSortedPostData();
  return (
    <div>
      <section>
        <h2 className=''>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
              <li key={id} className=''>
              <Link href={`/blog/${id}`}>
                {title}
                <br />
                {date}
              </Link>
              </li>
          ))}
        </ul>
      </section>
    </div>
  )
};
