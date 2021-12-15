import React from 'react'
import {
    Layout, Menu, Button, Switch, Tooltip
} from 'antd'
import { useState } from 'react'
import {
    DashboardOutlined, MenuUnfoldOutlined, MenuFoldOutlined, BulbFilled
} from '@ant-design/icons'
import '../css/admin.css'
import {
    WiMoonAltThirdQuarter, WiMoonAltFirstQuarter, 
} from 'react-icons/wi'
import {
    BsThreeDotsVertical
} from 'react-icons/bs'
import Dashboard from './Dashboard'

const AdminLayout = () => {

    const { Header, Sider } = Layout
    const [ stateCollaps, toggleCollaps ] = useState({collapsed: true})
    const [stateTheme, toggleTheme] = useState({theme: 'light', toggle: true})
    const [stateMode, toggleMode] = useState({mode: 'inline', toggle: true})

    

    const changeTheme = value => {
        value ? toggleTheme({theme: 'light', toggle: value}) : toggleTheme({theme: 'dark', toggle: value})
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={stateCollaps.collapsed} theme={stateTheme.theme} >
            
            {/* <Switch onChange={()=>changeTheme(!stateTheme.toggle)}>
                
            </Switch> */}
            {/* {stateTheme.toggle ? <WiMoonAltThirdQuarter fontSize='18px' cursor='pointer' alignmentBaseline="base" onClick={()=>changeTheme(!stateTheme.toggle)} color='black'/> : <WiMoonAltFirstQuarter onClick={()=>changeTheme(!stateTheme.toggle)} color='black'/>} */}
            <Tooltip title={stateTheme.theme}>
            {
                stateTheme.toggle ? <Button block={true} type='text' onClick={()=>changeTheme(!stateTheme.toggle)} icon={<WiMoonAltThirdQuarter color='black'/>}></Button> : <Button block={true} type='text' onClick={()=>changeTheme(!stateTheme.toggle)} icon={<WiMoonAltThirdQuarter color='white'/>}></Button>
            }
            </Tooltip>
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
                    <Tooltip title={stateTheme.theme}>
                        {/* {React.createElement(
                            stateTheme.toggle ? BulbFilled: BulbFilled,
                            {
                                className: 'trigger',
                                onClick: ()=>changeTheme(!stateTheme.toggle),
                                color: stateTheme.toggle ? '#000' : '#fff',
                                
                            }
                        )} */}
                        
                {/* <Button block={false} shape='circle' type='default' onClick={()=>changeTheme(!stateTheme.toggle)} icon={stateTheme.toggle ? <WiMoonAltThirdQuarter/> : <WiMoonAltFirstQuarter/>}></Button> */}
                    </Tooltip>
                </Header>
                <Dashboard />
            </Layout>
        </Layout>
    )
}

export default AdminLayout
