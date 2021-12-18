import React from 'react'
import { Layout } from 'antd'

const PostSchedule = () => {
    const { Content } = Layout

    return (
        <Content
            className='site-layout-background'
            style={{margin: '24px 16px', padding: 0, minHeight: '80vh'}}
        >
            Post Schedule
        </Content>
    )
}

export default PostSchedule
