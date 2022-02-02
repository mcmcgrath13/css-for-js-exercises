/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { NavLink } from '../Header';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalBackground isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent>
        <ModalDismiss onClick={onDismiss}><Icon id="close" /><VisuallyHidden>Dismiss menu</VisuallyHidden></ModalDismiss>
        <ModalNav>
          <ModalNavLink href="/sale">Sale</ModalNavLink>
          <ModalNavLink href="/new">New&nbsp;Releases</ModalNavLink>
          <ModalNavLink href="/men">Men</ModalNavLink>
          <ModalNavLink href="/women">Women</ModalNavLink>
          <ModalNavLink href="/kids">Kids</ModalNavLink>
          <ModalNavLink href="/collections">Collections</ModalNavLink>
        </ModalNav>
        <ModalFooter>
          <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
          <FooterNavLink href="/privacy">Privacy Policy</FooterNavLink>
          <FooterNavLink href="/contact">Contact Us</FooterNavLink>
        </ModalFooter>
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled(DialogOverlay)`
  background: hsla(var(--color-gray-700) / 0.8);
  isolation: isolate;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
`;

const ModalContent = styled(DialogContent)`
  background: var(--color-white);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20vw;
  padding: 16px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalDismiss = styled(UnstyledButton)`
  align-self: end;
`;

const ModalNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ModalNavLink = styled(NavLink)`
  font-size: 1.125rem;
`;

const ModalFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterNavLink = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  color: var(--color-gray-700);
`;

export default MobileMenu;
