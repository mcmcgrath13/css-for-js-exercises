/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    '--height': '8px',
    '--radius': '4px',
    '--inner-radius': '4px',
    '--padding': '0px',
  },
  'medium': {
    '--height': '12px',
    '--radius': '4px',
    '--inner-radius': '4px',
    '--padding': '0px',
  },
  'large': {
    '--height': '24px',
    '--radius': '8px',
    '--inner-radius': '4px',
    '--padding': '4px',
  },
}

const ProgressBar = ({ value, size }) => {
  return <Wrapper role="progressbar" style={SIZES[size]} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"><Bar style={{'--width': `${value}%`, ...SIZES[size]}}/></Wrapper>
};

const Wrapper = styled.div`
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  background: linear-gradient(90deg,
    ${COLORS.primary} 0%,
    ${COLORS.primary} var(--width),
    hsla(0deg 0% 0% / 0%) var(--width),
    hsla(0deg 0% 0% / 0%) 100%);
  height: 100%;
  border-radius: var(--inner-radius);
`;

export default ProgressBar;
