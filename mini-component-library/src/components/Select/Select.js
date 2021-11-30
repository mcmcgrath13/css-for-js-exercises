import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const displayedValueWidth = displayedValue.length * 8; // this is a hack and feels wrong/ in-accessible
  const width = displayedValueWidth + 16 + 48 + 'px'

  return (
    <Wrapper style={{ '--width': width }}>
      <SelectWrapper value={ value } onChange={ onChange }>
        { children }
      </SelectWrapper>
      <Chevron id='chevron-down' size='16' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  width: 100%;
  padding: 12px 32px 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  border: none;
  color: inherit;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 14px;
  pointer-events: none;
  color: inherit;
`;

export default Select;
