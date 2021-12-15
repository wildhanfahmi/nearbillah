import React from 'react'
import {
    Layout, Menu, Button, Switch, Tooltip, Card, Dropdown
} from 'antd'
import {
    BsThreeDotsVertical
} from 'react-icons/bs'
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
                    
               
            <Card title='Monthly' bordered={false} style={{width: '100%'}} extra={ <Dropdown overlay={menuMonthly} placement="bottomCenter">
        <Button type='text' icon={<BsThreeDotsVertical/>}></Button>
      </Dropdown>}>
                    <Gauges progress={'30%'} labelProgress='Tes'/>
                    </Card>
                     </Content>
     
    )
}

export default Dashboard
