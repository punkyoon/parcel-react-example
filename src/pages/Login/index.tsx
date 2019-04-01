import axios from 'axios';
import { inject, observer } from "mobx-react";
import React from 'react';
import styled from 'styled-components'

import { History } from 'history';

import { User } from '../../stores/user';


interface Props {
    history: History
    user: User;
    login: any;
    logout: any;
}
interface State {
    username: string;
    password: string;
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {username: '', password: ''};
    }

    requestLogin = async () => {
        const { username, password } = this.state;
        let response;

        try {
            response = await axios.post('http://localhost:5000/login', {username, password});
        } catch(e) {
            console.error(e.response.data);
            return;
        }

        console.log(response.data);
        this.props.login(response.data);

        this.setState({username: '', password: ''}, () => {    
            this.props.history.push('/about');
        });
    }

    requestLogout = async () => {
        this.props.logout();
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const key = e.currentTarget.name;
        if (key === 'username' || key ==='password')
            this.setState({[key]: e.currentTarget.value});
    }

    render() {
        const { user } = this.props;
        const { username, password } = this.state;

        return (
            <Base>
                <Title>{user ? 'Logout' : 'Login'}</Title>

                {user ?
                    <LogoutButton onClick={this.requestLogout}>Logout</LogoutButton> :
                    <>
                        <LoginForm>
                            <Username
                                onChange={this.handleChange}
                                name='username'
                                placeholder='Username'
                                type='text'
                                value={username}
                            />
                            <Password
                                onChange={this.handleChange}
                                name='password'
                                placeholder='Password'
                                type='password'
                                value={password}
                            />
                        </LoginForm>

                        <LoginButton onClick={this.requestLogin}>Login</LoginButton>
                    </>
                }
            </Base>
        );
    }
}

const Base = styled.div``;
const Title = styled.h1`
    font-family: Roboto, sans-serif;
`;

const LogoutButton = styled.button``;

const LoginForm = styled.div``;
const Username = styled.input``;
const Password = styled.input``;

const LoginButton = styled.button``;

export default inject((stores: any) => ({
    user: stores.user.user,
    login: stores.user.login,
    logout: stores.user.logout
}))(observer(Login));
