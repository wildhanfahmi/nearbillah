import React from 'react'
import { useState } from 'react'
import { Layout, Tooltip, Menu, Button } from 'antd'
import { Link } from 'react-router-dom'
import { siderPath } from './Path'
import {
    WiMoonAltThirdQuarter, WiMoonAltFirstQuarter, 
} from 'react-icons/wi'
import {
    RiSettings4Line
} from 'react-icons/ri'
import {
    BsThreeDotsVertical, BsNewspaper
} from 'react-icons/bs'
import {
    DashboardOutlined
} from '@ant-design/icons'
const Sider = (props) => {

    
    

    const { Sider } = Layout
    const { SubMenu } = Menu

    const collapsible = props.collapsed
    const [stateTheme, toggleTheme] = useState({theme: 'light', toggle: true})
    const [stateMode, toggleMode] = useState({mode: 'inline', toggle: true})

    const changeTheme = value => {
        value ? toggleTheme({theme: 'light', toggle: value}) : toggleTheme({theme: 'dark', toggle: value})
    }

    const rootSubmenuKeys = ['sub1']
    const [openKeys, setOpenKeys] = useState(['sub1'])

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
        if(rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            setOpenKeys(keys)
        } else{
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }



    return (
        <Sider trigger={null} collapsible collapsed={collapsible} theme={stateTheme.theme} >
            
            {/* <Switch onChange={()=>changeTheme(!stateTheme.toggle)}>
                
            </Switch> */}
            {/* {stateTheme.toggle ? <WiMoonAltThirdQuarter fontSize='18px' cursor='pointer' alignmentBaseline="base" onClick={()=>changeTheme(!stateTheme.toggle)} color='black'/> : <WiMoonAltFirstQuarter onClick={()=>changeTheme(!stateTheme.toggle)} color='black'/>} */}
            <Tooltip title={stateTheme.theme}>
            {
                stateTheme.toggle ? <Button block={true} type='text' onClick={()=>changeTheme(!stateTheme.toggle)} icon={<WiMoonAltThirdQuarter color='black'/>}></Button> : <Button block={true} type='text' onClick={()=>changeTheme(!stateTheme.toggle)} icon={<WiMoonAltThirdQuarter color='white'/>}></Button>
            }
            </Tooltip>
            <div className='logo'></div>
            <Menu id='menu' theme={stateTheme.theme} openKeys={openKeys} onOpenChange={onOpenChange} mode={stateMode.mode} defaultSelectedKeys={siderPath} defaultOpenKeys={['1']}> 
                <Menu.Item key='1' icon={<DashboardOutlined />}>
                    <Link to='/'>Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<BsNewspaper />} title="Posts">
                    <Menu.Item key="2"><Link to='/post/list'>Posts List</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/post/add'>Add Post</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/post/schedule'>Post Schedule</Link></Menu.Item>
                    <Menu.Item key="5"><Link to='/post/rate'>Post Rate</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<RiSettings4Line />}>
                    Setting
                </Menu.Item>
            </Menu>
            </Sider>
    )
}

export default Sider
