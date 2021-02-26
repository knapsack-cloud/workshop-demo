import * as React from 'react';
import cn from 'classnames';
import { LinkProps } from '../../../dist/meta/react';

const Link: React.FC<LinkProps> = ({
  text = 'Link',
  url = 'https://www.google.com/',
  active,
  newTab,
}: LinkProps) => (
  <a
    className={cn('ex-link', {
      'ex-link--active': active
    })}
    href={url}
    target={newTab ? '_blank' : '_self'}
  >{text}</a>
);

export default Link;
