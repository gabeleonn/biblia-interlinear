import React from 'react';
import { default as A } from 'next/link';

import { Styled } from './styles';
import { ILink } from '../../../utils/interfaces';

export const Link: React.FC<ILink> = ({ link, text, ariaLabel }) => (
  <A href={link}>
    <Styled aria-label={ariaLabel}>{text}</Styled>
  </A>
);
