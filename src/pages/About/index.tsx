import React from 'react';

import styled from 'styled-components'


export default class About extends React.Component {
    render() {
        return (
            <Base>
                <Wrapper>
                    <Title>About Snorlax</Title>
                    <Hr />
                    <Image src={require(`../../imgs/snorlax.png`)} />
                    <Description>Snorlax is cute Pokémon.</Description>
                </Wrapper>

                <Wrapper>
                    <Title>About Munchlax</Title>
                    <Hr />
                    <Image src={require(`../../imgs/munchlax.png`)} />
                    <Description>Munchlax is also cute Pokémon.</Description>
                </Wrapper>
            </Base>
        );
    }
}

const Base = styled.div``;
const Wrapper = styled.div`
    padding: 10px;
`;
const Title = styled.h1`
    color: #465e56;
    font-family: Roboto, sans-serif;
    margin: 0;
`;
const Hr = styled.div`
    background: #e9e9e9;
    height: 1px;
    margin: 5px 0 10px 0;
    max-width: 700px;
`;
const Image = styled.img`
    width: 500px;
`;
const Description = styled.div`
    font-family: Roboto, sans-serif;
`;
