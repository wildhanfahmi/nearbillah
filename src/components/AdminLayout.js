import React from 'react'
import {
    Layout, Menu, Button
} from 'antd'
import { useState } from 'react'
import {
    DashboardOutlined, MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons'
import '../css/admin.css'
import {
    WiMoonAltThirdQuarter
} from 'react-icons/wi'

const AdminLayout = () => {

    const { Header, Sider, Content } = Layout
    const [ stateCollaps, toggleCollaps ] = useState({collapsed: true})
    const [stateTheme, toggleTheme] = useState({theme: 'light', toggle: true})
    const [stateMode, toggleMode] = useState({mode: 'vertical', toggle: true})

    const changeTheme = value => {
        value ? toggleTheme({theme: 'light', toggle: value}) : toggleTheme({theme: 'dark', toggle: value})
    }

    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={stateCollaps.collapsed}>
            <Button type='default' onClick={()=>changeTheme(!stateTheme.toggle)} icon={<WiMoonAltThirdQuarter/>}></Button>
            <div className='logo'></div>
            <Menu theme={stateTheme.theme} mode={stateMode.mode} defaultSelectedKeys={['1']}>
                <Menu.Item key='1' icon={<DashboardOutlined />}>
                    Dashboard
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background' style={{padding: 0}}>

                    {
                        React.createElement(
                            stateCollaps.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: ()=>toggleCollaps({collapsed: !stateCollaps.collapsed})

                            }
                        )
                    }
    
                </Header>
                <Content
                    className='site-layout-background'
                    style={{margin: '24px 16px', padding: 24, minHeight: '80vh'}}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminLayout
