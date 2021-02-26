import { LitElement, unsafeCSS, customElement, property, html } from 'lit-element';
import cardStyles from './card.scss';

@customElement('bs-card')
export class MyButton extends LitElement {
  @property() imgSrc = '';

  @property() cardTitle = '';

  @property() cardSubTitle = '';

  static get styles() {
    return [
      unsafeCSS(cardStyles)
    ];
  };

  render() {
    return html`
      <div class="ex-card">
        ${this.imgSrc
          ? html` <img class="ex-card_img" src="${this.imgSrc}" /> `
          : ''}
        <div class="ex-card_body">
          <h5 class="ex-card_title">${this.cardTitle}</h5>
          ${this.cardSubTitle
            ? html`
                <h6 class="ex-card_subtitle">
                  ${this.cardSubTitle}
                </h6>
              `
            : ''}
          <p class="ex-card_text">
            ${this.cardBody}
            <slot name="body"></slot>
          </p>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
