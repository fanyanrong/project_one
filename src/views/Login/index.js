import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './index.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LoginPage extends Component {
    componentDidMount() {
        //调登录接口
        let { login } = this.props
        login({
            user_name: 'chenmanjie',
            user_pwd: 'Chenmanjie123!'
        });
    }

    render() {
        return (
            <div className={styles.index}>
                <div className={styles.login}>
                    <Form className="login-form" className={styles.login_form}>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入用户密码"
                            />
                        </Form.Item>
                        <Form.Item className={styles.form_pwd}>
                            <Checkbox>记住密码</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码</a><br />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" className={styles.login_form_button}>登录</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: 'user/login',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)