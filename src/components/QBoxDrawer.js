import React, {Component} from 'react';
import { Drawer, Menu, Icon } from 'antd';
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
class QBoxDrawer extends Component {

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
        return (
            <Drawer title="Menu Lateral" placement="left" closable={true} onClose={this.onClose} visible={this.state.visible}>
                <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                <SubMenu key="sub11" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                    <Menu.Item key="11">Option 1</Menu.Item>
                    <Menu.Item key="12">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                    <Menu.Item key="13">Option 3</Menu.Item>
                    <Menu.Item key="14">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub12" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="15">Option 5</Menu.Item>
                    <Menu.Item key="16">Option 6</Menu.Item>
                    <SubMenu key="sub13" title="Submenu">
                    <Menu.Item key="17">Option 7</Menu.Item>
                    <Menu.Item key="18">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub14" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="19">Option 9</Menu.Item>
                    <Menu.Item key="110">Option 10</Menu.Item>
                    <Menu.Item key="111">Option 11</Menu.Item>
                    <Menu.Item key="112">Option 12</Menu.Item>
                </SubMenu>
                </Menu>
            </Drawer>
        );
    }
}

export default QBoxDrawer;