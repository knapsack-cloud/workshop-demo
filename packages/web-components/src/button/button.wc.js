import { LitElement, customElement, property, html } from 'lit-element';
import style from '@knapsack-cloud/demo-design-system-styles/dist/styles.css'; // Design System styles

@customElement('bs-button')
export class MyButton extends LitElement {  
  @property() size = 'md';

  @property() type = 'primary';

  @property({
    type: Boolean,
  })
  outlined = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  render() {
    const classes = [
      'ex-button',
      this.type && `ex-button--${this.type}`,
      this.outlined && 'ex-button--outline-primary',
      this.disabled && 'ex-button--disabled',
      this.size && `ex-button--size-${this.size}`
    ].filter(Boolean).join(' ');
    return html`
      <style>${style}</style>
      <button class="${classes}">
        <slot></slot>
      </button>
    `;
  }
}