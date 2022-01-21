import Link from 'next/link'
import Head from "next/head";

export const MainLayout = ({children, title = 'Main'}) => {
    return <>

        <Head>
            <title>{title} | next</title>
        </Head>
        <nav>
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
            <p>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
            </p>
        </nav>
        <h1>Container</h1>
        <div>
            {children}
        </div>
    </>
}
