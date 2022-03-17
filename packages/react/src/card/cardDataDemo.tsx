import * as React from 'react';
import { Card } from './card';

export type CardDataDemoProps = {
  showImage?: boolean;
  label?: string;
  title?: string;
  /**
   * Content to fill out ONE paragraph
   */
  body?: string;
  /**
   * undefined. Only use: author, button
   */
  children?: React.ReactNode;
};

const sampleImageUrl =
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=exTPH5Vqg4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80';

export const CardDataDemo: React.FC<CardDataDemoProps> = ({
  label,
  title,
  showImage,
  body,
  children,
}) => (
  <Card
    label={label}
    title={title}
    body={body}
    imgSrc={showImage ? sampleImageUrl : ''}
  >
    {children}
  </Card>
);
