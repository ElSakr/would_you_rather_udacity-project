import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button, Select } from 'antd';
import { _getUsers } from './../../utils/_DATA';
import { login } from './../../store/actions/login';
import { withRouter } from 'react-router-dom';
import './signin.css';

const SignIn = ({ history }) => {
  const { Option } = Select;
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem('token');
    _getUsers().then(allUsers =>
      setUsers(Object.keys(allUsers).map(user => allUsers[user]))
    );
  }, []);

  const onFinish = values => {
    dispatch(login(users.find(user => user?.id === values?.user)));
    localStorage.setItem('token', values?.user);
    history.push('/');
  };

  const renderUsers = () => {
    return (
      users &&
      users.length &&
      users.map(user => (
        <Option key={user?.id} value={user?.id}>
          <img
            src={user?.avatarURL}
            alt={user?.name}
            width="30"
            className="user_avatar"
          />
          <span>{user?.name}</span>
        </Option>
      ))
    );
  };
  return (
    <Row justify="center" align="top" >
      <Col xs={18} sm={18} md={12} lg={12} xl={12}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <img
            className="welcome-icon"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&facialHairColor=Platinum&clotheType=Overall&clotheColor=Gray02&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Light"
          />
          <div className="headline">
            <h4>Welcome to the Would You Rather App!</h4>
            <h6>Login in and let's start</h6>
          </div>
          <Form.Item
            name="user"
            rules={[
              {
                required: true,
                message: 'Please Select a user!'
              }
            ]}
          >
            <Select defaultValue="Select User">{renderUsers()}</Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default withRouter(SignIn);
