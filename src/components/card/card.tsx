import * as React from 'react';
import cn from 'classnames';
import { CardProps } from '../../../dist/meta/react';

const Card: React.FC<CardProps> = ({
  children,
  cardBody,
  cardSubTitle,
  cardTitle,
  imgSrc,
}: CardProps) => {
  return (
    <div className="ex-card">
      {imgSrc && (
        <img
          className="ex-card_img"
          alt="An example image inside a card"
          src={imgSrc}
        />
      )}
      <div className="ex-card_body">
        <h5 className="ex-card_title">{cardTitle}</h5>
        {cardSubTitle && (
          <h6 className="ex-card_subtitle">{cardSubTitle}</h6>
        )}
        <p className="ex-card_text">{cardBody}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
