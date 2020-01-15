import {menuTemplate} from '../mock/menu.js';
const generateMenuTemplate = (menu) => {
  menu.forEach((element) => {
    return (
      `<a class="trip-tabs__btn ${element.isChecked ? `trip-tabs__btn--active` : ``}" href="#">${element.title}</a>\n`
    );
  });
};

export const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${generateMenuTemplate(menuTemplate)}
    </nav>`
  );
};
