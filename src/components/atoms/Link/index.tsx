import React from 'react';
import { default as A } from 'next/link';

import { Styled } from './styles';
import { ILink } from '../../../utils/interfaces';

export const Link: React.FC<ILink> = ({ link, order, text }) => (
  <A href={`/ara/${link}`} key={order}>
    <Styled>{text}</Styled>
  </A>
);
