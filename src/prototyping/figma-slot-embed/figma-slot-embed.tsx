import React, { useRef, useState, useEffect } from 'react';
import url from 'url';

type Props = {
  frameURL: string;
  frameHeight: number;
  frameWidth: number;
};

const convertFigmaUrl = (shareUrl: string) => {
  const { host } = url.parse(shareUrl, true);
  if (host !== 'www.figma.com') {
    throw new Error(
      `Provided url needs to be for figma.com, received "${shareUrl}"`,
    );
  }
  const src = url.format({
    protocol: 'https',
    hostname: host,
    pathname: '/embed',
    query: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      embed_host: 'share',
      url: shareUrl,
      allowfullscreen: false,
    },
  });
  return src;
}

const FigmaSlotEmbed: React.FC<Props> = ({
  frameURL,
  frameHeight,
  frameWidth,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const landscapeDimensions = frameWidth > frameHeight;

  const getPortraitDimensions = () => {
    const currentWrapper = wrapperRef.current;

    if (currentWrapper) {
      return `${currentWrapper.clientWidth / (frameWidth / frameHeight)}px`;
    }

    return null;
  };

  const [iframeHeight, setIframeHeight] = useState(
    landscapeDimensions
      ? `${frameHeight / frameWidth * 100}%`
      : null
  );

  // If !landscapeDimensions, need the wrapper to render before iframe
  // so we have the width. This checks it on first run.
  useEffect(() => {
    if (!landscapeDimensions) {
      setIframeHeight(getPortraitDimensions());
    }
  }, []);

  // Update on resize
  // https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
  const refreshIframe = () => {
    const currentWrapper = wrapperRef.current;
    const iframeNode = currentWrapper.children?.[0];

    if (!landscapeDimensions) {
      setIframeHeight(getPortraitDimensions());
    }

    if (iframeNode) {
      // force the iframe to reload so we get the updated Figma dimensions.
      currentWrapper.replaceChild(iframeNode.cloneNode(), iframeNode);
    }
  }

  useEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        refreshIframe();
      }, 100);
    };

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="figma-slot-embed"
      style={{paddingBottom: `${iframeHeight}`}}
    >
      {iframeHeight && <iframe src={convertFigmaUrl(frameURL)} frameBorder="0" />}
    </div>
  );
};

export default FigmaSlotEmbed;
