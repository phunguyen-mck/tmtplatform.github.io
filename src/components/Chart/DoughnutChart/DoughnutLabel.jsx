import React from 'react';
import styled from '@emotion/styled';

const StyledLabelWrapper = styled.div`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  text-align: center;
  position: absolute;
  top: ${(prop) => prop.top}px;
  left: ${(prop) => prop.left}px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
`;

const DoughnutLabel = ({ radius, innerRadius, children }) => {
  const size = innerRadius * 2;
  const top = radius - innerRadius;
  const left = radius - innerRadius;
  return (
    <StyledLabelWrapper {...{ size, top, left }}>{children}</StyledLabelWrapper>
  );
};

export default DoughnutLabel;
