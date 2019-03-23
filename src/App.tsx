import React from 'react';
import styled from 'styled-components'


export default class App extends React.Component {
    render() {
        return (
            <Base className='App'>
                <H1>Hello World</H1>
            </Base>
        );
    }
}

const Base = styled.div``;
const H1 = styled.h1``;
