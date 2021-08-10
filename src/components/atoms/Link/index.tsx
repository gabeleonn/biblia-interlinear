import React from 'react';
import { default as A } from 'next/link';

import { Styled } from './styles';
import { ILink } from '../../../utils/interfaces';

export const Link: React.FC<ILink> = ({
  link,
  text,
  ariaLabel,
  isExternal,
}) => (
  <A href={link} passHref={isExternal}>
    <Styled aria-label={ariaLabel} target={isExternal ? '__blank' : null}>
      {text}
    </Styled>
  </A>
);
