import Link from 'next/link'

export default function Header () {
  return (
    <header>
        <div classname = 'container'>
            <Link href = '/' >
                <h2>Tech Blog</h2>
            </Link>
        </div>
    </header>
  )
}

