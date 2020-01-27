export const createElement = function (template) {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

export class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
    this._element = null;
  }
  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
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

export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistsElement = !!(parentElement && newElement && oldElement);

  if (isExistsElement && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

export const render = (container, template) => {
  container.append(template);
};


