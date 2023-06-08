import React from 'react';
import styled from "styled-components";

function TestPage({title, content}) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Contents>{content}</Contents>
        </Wrapper>
    );
}

const Title = styled.h1`

  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.h1`
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
`


export default TestPage;