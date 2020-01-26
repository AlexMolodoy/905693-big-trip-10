import {createElement} from '../utils.js';

export const createContentTemplate = () => {
  return (
    `<ul class="trip-days">
      </ul>`
  );
};


export class Content {
  constructor(content) {
    this._content = content;
    this._element = null;
  }
  getTemplate() {
    return createContentTemplate(this._content);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }
}
