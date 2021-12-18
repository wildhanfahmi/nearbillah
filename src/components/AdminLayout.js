import React from 'react'
import {
    Layout, Menu, Button, Switch, Tooltip, Breadcrumb
} from 'antd'
import { useState } from 'react'
import {
    DashboardOutlined, MenuUnfoldOutlined, MenuFoldOutlined, BulbFilled, MailOutlined
} from '@ant-design/icons'
import '../css/admin.css'
import Sider from './Sider'
import Dashboard from './Dashboard'
import { Outlet, Link } from 'react-router-dom'


const AdminLayout = (props) => {

    const { Header, Content } = Layout
    
    const [ stateCollaps, toggleCollaps ] = useState({collapsed: false})
    

    return (
        <Layout>
            <Sider
                collapsed={stateCollaps.collapsed}
            />
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
                    {/* <Tooltip title={stateTheme.theme}> */}
                        {/* {React.createElement(
                            stateTheme.toggle ? BulbFilled: BulbFilled,
                            {
                                className: 'trigger',
                                onClick: ()=>changeTheme(!stateTheme.toggle),
                                color: stateTheme.toggle ? '#000' : '#fff',
                                
                            }
                        )} */}
                        
                {/* <Button block={false} shape='circle' type='default' onClick={()=>changeTheme(!stateTheme.toggle)} icon={stateTheme.toggle ? <WiMoonAltThirdQuarter/> : <WiMoonAltFirstQuarter/>}></Button> */}
                    {/* </Tooltip> */}
                </Header>
                {/* <Content style={{margin: '24px 16px 5px 24px', padding: 0}}>
                
                </Content> */}
                <Outlet />
                {/* {loadContent} */}
            </Layout>
        </Layout>
    )
}

export default AdminLayout
