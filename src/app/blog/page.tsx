
import { NextPageContext } from 'next'
import { getSortedPostData } from '../../utils/posts';
import Link from 'next/link';

export default async function Blog() {
  const allPostsData = await getSortedPostData();
  return (
    <div>
      <section>
        <h1 className='titleContainer mt-4 mb-4'>Yuiti's Blog</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
              <li key={id} className=''>

                <div className='textContainer mt-2 mb-2'>
                  <Link href={`/blog/${id}`}>
                    <h3>{title}</h3>
                    {date}
                  </Link>
                </div>

              </li>
          ))}
        </ul>
      </section>
    </div>
  )
};
