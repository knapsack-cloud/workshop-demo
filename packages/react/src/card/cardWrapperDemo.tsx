import * as React from 'react';
import { Card, CardProps } from './card';

const sampleImageUrl =
  'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=exTPH5Vqg4&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80';

export const CardWrapperDemo: React.FC<{
  label: string;
  title: string;
  showImage: boolean;
  body: string;
  children: React.ReactNode;
}> = ({ label, title, showImage, body, children }) => (
  <Card
    label={label}
    title={title}
    body={body}
    imgSrc={showImage ? sampleImageUrl : ''}
  >
    {children}
  </Card>
);
