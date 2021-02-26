import { LitElement, unsafeCSS, customElement, property, html } from 'lit-element';
import buttonStyles from './button.scss';

@customElement('ex-button')
export class MyButton extends LitElement {
  @property() size = 'md';

  @property() type = 'primary';

  @property({
    type: Boolean,
  })

  @property({
    type: Boolean,
  })

  disabled = false;

  static get styles() {
    return [
      unsafeCSS(buttonStyles)
    ];
  };

  render() {
    const classes = [
      'ex-button',
      this.type ? `ex-button--${this.type}` : '',
      this.disabled ? 'ex-button--disabled' : '',
      this.size ? `ex-button--size-${this.size}` : '',
    ].join(' ');

    return html`
      <button class="${classes}">
        <slot></slot>
      </button>
    `;
  }
}
