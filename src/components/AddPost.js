import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const AddPost = () => {
    const { Content } = Layout
    return (
        <Content
            className='site-layout-background'
            style={{margin: '24px 16px', padding: 0, minHeight: '80vh'}}
        >
            <Breadcrumb style={{padding: '15px 16px 10px 24px', margin: 0, backgroundColor: '#F0F2F5'}}>
                    <Breadcrumb.Item><BiHomeAlt/></Breadcrumb.Item>
                    <Breadcrumb.Item>
                     <Link to='/post/list'>Post</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Add</Breadcrumb.Item>
                </Breadcrumb>
            Add Post
        </Content>
    )
}

export default AddPost
