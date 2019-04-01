import { inject, observer } from "mobx-react";
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


interface Props {
    user: any;
}


const Home: React.FunctionComponent<Props> = ({ user }) => {
    return (
        <Base>
            <Title>Home {user.user && `${user.user.username}, ${user.user.age}`}</Title>

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

export default inject('user')(observer(Home));
