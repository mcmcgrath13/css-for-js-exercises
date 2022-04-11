import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS, COLORS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  --transition-time: 300ms;
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-time);
  position: relative;
  display: inline-block;
  padding: 5px;

  &:hover {
    color: hsl(${COLORS.primary});
  }

  &::before {
    opacity: 0;
    transform: translateY(10px);
    background: hsl(${COLORS.primary});
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    transition: opacity var(--transition-time), transform var(--transition-time);
  }

  &:hover::before, &:hover::after {
    opacity: 1;
    transform: translateY(0px);
  }

  &:after {
    opacity: 0;
    transform: translateY(-10px);
    background: hsl(${COLORS.primary});
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    transition: opacity var(--transition-time), transform var(--transition-time);
  }
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};

`;

export default Logo;
