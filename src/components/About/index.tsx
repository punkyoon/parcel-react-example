import React from 'react';

import styled from 'styled-components'


export default class About extends React.Component {
    render() {
        return (
            <Base>
                <Title>About Snorlax</Title>
                <Hr />
                <Image src={require(`../../imgs/snorlax.png`)} />
                <Description>Snorlax is cute Pokémon.</Description>

                <Title>About Munchlax</Title>
                <Hr />
                <Image src={require(`../../imgs/munchlax.png`)} />
                <Description>Munchlax is also cute Pokémon.</Description>
            </Base>
        );
    }
}

const Base = styled.div``;

const Title = styled.h1``;
const Hr = styled.hr``;
const Image = styled.img``;
const Description = styled.div``;

