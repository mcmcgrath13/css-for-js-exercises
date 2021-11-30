import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    '--border-width': '1px',
    '--font-size': 14 / 16 + 'rem',
    '--padding': '2px 0px 2px 24px'
  },
  'large': {
    '--border-width': '2px',
    '--font-size': 18 / 16 + 'rem',
    '--padding': '8px 0px 7px 36px'
  }
}

const ICON_PROPS = {
  'small': {
    size: 16,
    strokeWidth: 1,
    style: {
      '--icon-offset': '4px'
    }
  },
  'large': {
    size: 24,
    strokeWidth: 2,
    style: {
      '--icon-offset': '6px'
    }
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconProps = ICON_PROPS[size]

  return (
    <label><VisuallyHidden>{label}</VisuallyHidden>
      <Wrapper style={{width}}>
        <Input type="text" placeholder={placeholder} style={STYLES[size]} />
        <IconWrapper id={icon} {...iconProps} />
      </Wrapper>
    </label>
  )
};

const Wrapper = styled.p`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  padding: var(--padding);
  width: 100%;
  appearance: none;
  border: none;
  border-bottom: var(--border-width) solid black;
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  line-height: 1.2;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: var(--icon-offset);
  pointer-events: none;
`;


export default IconInput;
