import React from 'react';

import styled from 'styled-components'


export default class NotFound extends React.Component {
    render() {
        return (
            <Base>
                <Title>Page Not Found</Title>
                <Video src="https://www.youtube-nocookie.com/embed/K6DWMGd0cPY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </Video>
            </Base>
        );
    }
}

const Base = styled.div``;
const Title = styled.h1``;
const Video = styled.iframe`
    height:315px;
    width: 560px
`;
