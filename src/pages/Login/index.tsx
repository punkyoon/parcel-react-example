import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

import { History } from 'history';


interface Props {
    history: History
}
interface State {
    username: string;
    password: string;
}

export default class Login extends React.Component<Props, State> {
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

        this.setState({username: '', password: ''}, () => {
            this.props.history.push('/about');
        });
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const key = e.currentTarget.name;
        if (key === 'username' || key ==='password')
            this.setState({[key]: e.currentTarget.value});
    }

    render() {
        const { username, password } = this.state;

        return (
            <Base>
                <Title>Login</Title>

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
            </Base>
        );
    }
}

const Base = styled.div``;
const Title = styled.h1`
    font-family: Roboto, sans-serif;
`;

const LoginForm = styled.div``;
const Username = styled.input``;
const Password = styled.input``;

const LoginButton = styled.button``;
