import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import './header.css';

const AppHeader = props => {
  const { current_user, history } = props;
  const { Header } = Layout;
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/sign_in');
  };
  return (
    <Header className="custome_header">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="home" onClick={() => history.push('/')}>
          Home
        </Menu.Item>
        <Menu.Item key="new" onClick={() => history.push('/new-question')}>
          New Quesion
        </Menu.Item>
        <Menu.Item key="leaders" onClick={() => history.push('/leader-board')}>
          Leader board
        </Menu.Item>
      </Menu>

      <div className="left-side">
        <div className="user">
          <img
            src={current_user?.avatarURL}
            alt={current_user?.name}
            width="30"
            className="user_avatar"
          />
          <span>{current_user?.name}</span>
        </div>
        <div className="logout">
          <Button
            type="primary"
            htmlType="button"
            className="login-form-button"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    current_user: state?.login?.user
  };
};
export default connect(mapStateToProps, {})(withRouter(AppHeader));
// export default withRouter(Header);
