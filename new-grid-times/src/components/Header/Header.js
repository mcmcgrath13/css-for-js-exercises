import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Icons = (props) => {
  return (
    <ActionGroup {...props}>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <Icons />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopIcons />
        <Logo />
        <Subscribe>
          <Button>Subscribe</Button>
          <Link>Already a subscriber?</Link>
        </Subscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  place-content: center;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DesktopIcons = styled(Icons)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const Subscribe = styled.div`
  display: none;
  justify-self: end;
  align-self: end;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    width: max-content;
    flex-direction: column;
    align-items: center;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  font-style: italic;
  color: var(--color-gray-900);

  &:hover {
    text-decoration: none;
  }
`;

export default Header;
