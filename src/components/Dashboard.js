import React from 'react'
import {
    Layout, Menu, Button, Switch, Tooltip, Card, Dropdown, Breadcrumb
} from 'antd'
import {
    BsThreeDotsVertical
} from 'react-icons/bs'
import {
    BiHomeAlt
} from 'react-icons/bi'
import Gauges from './Gauges'
const Dashboard = () => {

    const { Content } = Layout

    const menuMonthly = (
  <Menu>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
        </a>
        </Menu.Item>
    </Menu>
    )

    return (
            
            <Content
                    className='site-layout-background'
                    style={{margin: '24px 16px', padding: 0, minHeight: '80vh'}}
                >
                  <Breadcrumb style={{padding: '15px 16px 10px 24px', margin: 0, backgroundColor: '#F0F2F5'}}>
                    <Breadcrumb.Item><BiHomeAlt/></Breadcrumb.Item>
                    <Breadcrumb.Item>
                     Dashboard
                    </Breadcrumb.Item>
                </Breadcrumb>  
               
            <Card title='Monthly' bordered={false} style={{width: '100%'}} extra={ <Dropdown overlay={menuMonthly} placement="bottomCenter">
        <Button type='text' icon={<BsThreeDotsVertical/>}></Button>
      </Dropdown>}>
                    <Gauges progress={'30%'} labelProgress='Tes'/>
                    </Card>
                     </Content>
     
    )
}

export default Dashboard
