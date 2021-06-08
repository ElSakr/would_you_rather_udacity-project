import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import PATH_NAME from './pathNames';
import { Auth } from '../utils/auth';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Route
          {...rest}
          render={props => {
            return Auth.isAuth() ? (
              <Component {...props} />
            ) : (
              <Redirect to={PATH_NAME.SIGN_IN} />
            );
          }}
        />
      </Content>
    </Layout>
  );
};

export default PrivateRoute;
