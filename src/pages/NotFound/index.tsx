import React from 'react';
import styled from 'styled-components'


const NotFound: React.FunctionComponent = () => {
    return (
        <Base>
            <Title>Page Not Found</Title>
            <Video
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                src="https://www.youtube-nocookie.com/embed/K6DWMGd0cPY"
            />
        </Base>
    );
}

const Base = styled.div``;
const Title = styled.h1`
    font-family: Roboto, sans-serif;
`;
const Video = styled.iframe`
    border: none;
    height:315px;
    width: 560px
`;

export default NotFound;
