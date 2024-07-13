import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  {
    key: 'capture',
    label: 'Capture',
    icon: <MailOutlined />,
    children: [
        {
            key: '1',
            icon: <PieChartOutlined />,
            label: <Link to="/">User Actions</Link>,
          },
          {
            key: '2',
            icon: <DesktopOutlined />,
            label: <Link to="/capture-analytics">Analytics</Link>,
        
          },
          {
            key: '3',
            icon: <ContainerOutlined />,
            label: <Link to="/capture-publish">Publish</Link>,
          },
          {
            key: '4',
            icon: <AppstoreOutlined />,
            label: <Link to="/capture-feature-requests">Feature Requests</Link>,
          },
    ],
  },
  {
    key: 'Build',
    label: 'Build',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
          },
        ],
      },
    ],
  },
];


export function AppMenu(){
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
    //   style={{
    //     width: 256,
    //   }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
    );
}