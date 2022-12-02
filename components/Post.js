import Link from 'next/link'

function Post({post}) {
  return (
    <div classname = 'post'>
        <div class = 'post-date'> Post on {post.frontMatter.date}</div>
        <h3>{post.frontMatter.title}</h3>
        <p>{post.frontMatter.excerpt}</p>
        <Link href = {`/blog/${post.slug}`}>
            <a class = 'btn'> Read More</a>
        </Link>
    </div>
  )
}

export default Post