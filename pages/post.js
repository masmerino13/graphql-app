import { withRouter } from 'next/router'

const Post = withRouter(({ router }) => (
    <div>
        <h1>Item id: {router.query.id}</h1>
        <p>Post content here ladies</p>
    </div>
))

export default Post;
