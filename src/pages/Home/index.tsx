import React from 'react';

import styled from 'styled-components'
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return (
            <Base>
                <Title>Home</Title>
                <Link to='/about'>About cute Pokémon</Link>
            </Base>
        );
    }
}

const Base = styled.div``;
const Title = styled.h1`
    font-family: Roboto, sans-serif;
`;
