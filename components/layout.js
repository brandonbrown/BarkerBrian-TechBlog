import Link from 'next/link';

 function Layout ({ children }){
    return (
        <div className ='flex flex-col'>
            <header className='bg-gray-900 mb-8 py-4 text-white'>
                <div className='container mx-auto flex justify-center'>
                    <Link href='/'>
                    </Link>
                </div>
                <span>Welcome to Tech Blog</span>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-gray-900 mt-8 py-4'>
                <div className='container mx-auto flex justify-center text-white'>
                    &copy; 2022 Brian Barker
                </div>
            </footer>
        </div>
    )
}
export default Layout 