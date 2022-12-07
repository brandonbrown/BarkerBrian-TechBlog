import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
const fs = require('fs');

export default function Home({allPostsData}) {
  return (
    <div>
      <section>
        <ul className='list'>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${title}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
   //console.log({allPostsData}) // confirmed to be receiving data
  return {
    props: { allPostsData }
  };
}





// export async function getSortedPostsData(){
//    

//   const posts = files.map(filename => {
//     
//     const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
//     const { data:frontMatter } = matter(markdownWithMeta)
//     return{
//       slug,
//       frontMatter
//     }
//   })
// }
