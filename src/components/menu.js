import {menuTemplate} from '../mock/menu.js';
import {createElement} from '../utils.js';

const generateMenuTemplate = (menu) => {
  return menu.map((element) => (
    `<a class="trip-tabs__btn ${element.isChecked ? `trip-tabs__btn--active` : ``}" href="#">${element.title}</a>\n`
  )).join(``);
};

export const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateMenuTemplate(menuTemplate)}
    </nav>`
  );
};

export class Menu {
  constructor(menu) {
    this._menu = menu;
    this._element = null;
  }
  getTemplate() {
    return createMenuTemplate();
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
