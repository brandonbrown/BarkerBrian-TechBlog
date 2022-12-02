import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({frontMatter:{title, date}, slug, content}) {
  return <>
  <Link href='/'>Go Back</Link>
  <h1 class='post-title'>{title}</h1>
  <div class='post-date'>Posted On {date}</div>
  <div class='post-body'></div>
  <div class='innerHtml'>{{html: marked({content})}}</div>

    </>
  
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('md', '')
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const { data:frontMatter, content } = matter(markdownWithMeta)
    return{
        props: {
            slug,
            frontMatter,
            content
        }
    }
}