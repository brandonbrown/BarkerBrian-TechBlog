import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'


export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Tech Blog</title>
      </Head>
      <div classname = 'posts'>
        {posts.map((post, index) =>(
          <Post post = {post}/>
        ) )}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data:frontMatter } = matter(markdownWithMeta)
    return{
      slug,
      frontMatter
    }
  })
  return{
    props:{
      posts,
    }
  }
}
