import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Home: React.FunctionComponent = () => {
    return (
        <Base>
            <Title>Home</Title>

            <List>
                <ListItem><Link to='about'>About cute Pokémon</Link></ListItem>
                <ListItem><Link to='login'>Go to login</Link></ListItem>
            </List>
        </Base>
    );
}

const Base = styled.div``;
const Title = styled.h1`
    font-family: Roboto, sans-serif;
`;

const List = styled.ul``;
const ListItem = styled.li``;

export default Home;
