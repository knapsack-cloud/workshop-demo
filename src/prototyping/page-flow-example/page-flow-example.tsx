import * as React from 'react';
import { PageFlowExampleProps } from '../../../dist/meta/react';
import FigmaSlotEmbed from '../figma-slot-embed/figma-slot-embed';

const PageFlowExample: React.FC<PageFlowExampleProps> = ({
  figmaFrameURL,
  figmaFrameHeight,
  figmaFrameWidth,
  minWidth,
  header,
  content,
  footer,
}: PageFlowExampleProps) => (
  <div className="ex-page-flow-example" style={{minWidth: `${minWidth}px` || 0}}>
    {header && header}
    <div className="ex-page-flow-example__body">
      {figmaFrameURL && figmaFrameWidth && figmaFrameHeight && (
        <FigmaSlotEmbed
          frameURL={figmaFrameURL}
          frameHeight={figmaFrameHeight}
          frameWidth={figmaFrameWidth}
        />
      )}
      {content && (
        <div className="ex-page-flow-example__content">{content}</div>
      )}
    </div>
    {footer && footer}
  </div>
);

export default PageFlowExample;
