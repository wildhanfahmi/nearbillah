import React from 'react'
import { Layout } from 'antd'

const PostList = (props) => {

    const { Content } = Layout

    return (
        <Content
            className='site-layout-background'
            style={{margin: '24px 16px', padding: 0, minHeight: '80vh'}}
        >
            PostList
        </Content>
    )
}

export default PostList
