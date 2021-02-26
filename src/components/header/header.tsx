import * as React from 'react';
import { HeaderProps } from '../../../dist/meta/react';

const Header: React.FC<HeaderProps> = ({
  children,
}: HeaderProps) => (
  <div className="ex-header">
    <h1>Instance</h1>
    <div className="ex-header__nav">
      {children}
    </div>
  </div>
);

export default Header;
