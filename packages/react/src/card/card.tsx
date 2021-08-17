import * as React from 'react';
import { CardProps } from '@knapsack-cloud/demo-design-system-shared-types';

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  img
}) => {
  return (
    <div className="ex-card">
      {img && <img src={img} className="ex-card_img" alt="" />}
      <div className="ex-card_body">
        {title && <h4 className="ex-card_title">{ title }</h4>}
        {subtitle && <h6 className="ex-card_subtitle">{ subtitle }</h6>}
        {children &&
          <div>
            { children }
          </div>
        }
      </div>
    </div>
  );
};