module.exports = {
  breakpoint: {
    width: {
      small: {
        value: '330px',
      },
      medium: {
        value: '480px',
      },
      large: {
        value: '768px',
      },
      xlarge: {
        value: '992px',
      },
      xxlarge: {
        value: '1240px',
      },
      xxxlarge: {
        value: '1440px',
      },
      featuredSwap: {
        value: '850px',
      },
    },
    'media-query': {
      small: {
        value: 'screen and (min-width: {breakpoint.width.small.value})',
      },
      medium: {
        value: 'screen and (min-width: {breakpoint.width.medium.value})',
      },
      large: {
        value: 'screen and (min-width: {breakpoint.width.large.value})',
      },
      xlarge: {
        value: 'screen and (min-width: {breakpoint.width.xlarge.value})',
      },
      xxlarge: {
        value: 'screen and (min-width: {breakpoint.width.xxlarge.value})',
      },
      xxxlarge: {
        value: 'screen and (min-width: {breakpoint.width.xxxlarge.value})',
      },
      featuredSwap: {
        value: 'screen and (min-width: {breakpoint.width.featuredSwap.value})',
      },
    },
  },
};
