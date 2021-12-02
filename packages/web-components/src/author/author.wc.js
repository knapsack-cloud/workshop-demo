import { LitElement, customElement, property, html } from 'lit-element';
import style from '@knapsack-cloud/demo-design-system-styles/dist/styles.css'; // Design System styles

@customElement('ks-author')
export class Author extends LitElement {  
  @property() read = '';
  @property() date = '';
  @property() imgSrc = '';

  firstUpdated() {
    // If we have an image, reach into the shadowDOM and select the default slot element
    const slot = this.imgSrc && this.shadowRoot.querySelector('slot');
    // Grab the assigned child nodes in the form of a NodeList
    const childNodes = slot && slot.assignedNodes({ flatten: true });
    // Verify the node is a text node, then assign the value
    const Text = childNodes.length && childNodes[0].nodeType === Node.TEXT_NODE && childNodes[0].textContent;
    // If we have our text, add it to the DOM
    if (Text) this.shadowRoot.querySelector('.sr-only').innerHTML = Text;
  }

  render() {
    const classes = [
      'flex',
      'items-center',
      'dark:bg-gray-900'
    ].join(' ');

    return html`
      <style>
        ${style}
        :host {
          display: block;
        }
      </style>
      <div class="${classes}">
        ${this.imgSrc &&
          html`
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">AUTHOR NAME</span>
                <img class="h-10 w-10 rounded-full" src="${this.imgSrc}" alt="" />
              </a>
            </div>
          `}
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              <a href="#" class="hover:underline">
                <slot></slot>
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
              ${this.date &&
                html`<time datetime="2020-03-10">${this.date}</time>`
              }
              ${this.read && this.date && html`<span aria-hidden="true">·</span>` }
              ${this.read &&
                html`<span>${this.read}</span>`
              }
            </div>
          </div>
      </div>
    `;
  }
}