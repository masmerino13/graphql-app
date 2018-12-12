import Link from 'next/link'

const PostLink = ({ link }) => (
    <li>
        <Link href={`/post?id=${link.id}`}>
            <a>{link.title}</a>
        </Link>
    </li>
)

const items = [
    {
        id: 1,
        title: 'Im a title'
    },
    {
        id: 2,
        title: 'Another title'
    },
    {
        id: 3,
        title: 'Some title'
    }
]
const Index = () => (
    <div>
        <h1>My Blog</h1>
        <ul>
            {
                items.map(link => <PostLink key={link.id} link={link} />)
            }
        </ul>
    </div>
)

export default Index;