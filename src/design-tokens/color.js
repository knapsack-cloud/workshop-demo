// Core Color Values
const base = {
  yellow: { value: '#ffd94f' },
  green: { value: '#3ccf91' },
  blue: { value: '#3c5ccf' },
  orange: { value: '#ff934f' },
  red: { value: '#ef5151' },
  orchid: { value: '#aa1baf' },
}

const light = {
  yellow: { value: '#ffeeb3' },
  green: { value: '#8de2bf' },
  blue: { value: '#8d9fe2' },
  orange: { value: '#ffd0b3' },
  red: { value: '#f8b0b0' },
  orchid: { value: '#e77bea' },
}

const dark = {
  yellow: { value: '#e6b400' },
  green: { value: '#21835a' },
  blue: { value: '#213683' },
  orange: { value: '#e65800' },
  red: { value: '#c91313' },
  orchid: { value: '#560e58' },
}

const layout = {
  defaultBg: { value: '#FFFFFF' },
  primary: { value: '#393B3E' },
  primaryHover: { value: '#525A62' },
  secondary: { value: '#555555' },
  border: { value: '#DDDDDD' },
};

const text = {
  default: { value: '#222222' },
  inverse: { value: '#f9f9f9' },
  link: { value: '#2B64A8' }
};

module.exports = {
  color: {
    base,
    light,
    dark,
    layout,
    text
  },
};
