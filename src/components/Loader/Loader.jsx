import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = ({ height = 380, width = 380 }) => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <h1>Loading...</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 80vh;
`;
