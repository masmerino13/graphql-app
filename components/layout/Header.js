import Link from 'next/link'

const styles = {
    marginLeft: "10px"
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={ styles }>Home</a>
        </Link>
        <Link href="/about">
            <a style={ styles }>About</a>
        </Link>
        <Link href="/blog">
            <a style={ styles }>Blog</a>
        </Link>
    </div>
)

export default Header;
