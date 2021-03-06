import {cardGenerate} from '../mock/card.js';
import {AbstractSmartComponent} from './abstract-smart-component';

const createCardArray = () => {
  const cardArray = [];
  for (let i = 0; i < 5; i++) {
    cardArray.push(cardGenerate());
  }
  return cardArray;
};

export const cards = createCardArray();

export const createCardTemplate = (card) => {
  const duration = new Date(Date.parse(card.endEvent) - Date.parse(card.startEvent));
  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${card.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${card.type} to ${card.city}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${card.startEvent.getYear()}-${card.startEvent.getMonth()}-${card.startEvent.getDate()}T${card.startEvent.getHours()}:${card.startEvent.getMinutes()}">${card.startEvent.getHours()}:${card.startEvent.getMinutes()}</time>
          &mdash;
          <time class="event__end-time" datetime="${card.endEvent.getYear()}-${card.endEvent.getMonth()}-${card.endEvent.getDate()}T${card.endEvent.getHours()}:${card.endEvent.getMinutes()}">${card.endEvent.getHours()}:${card.endEvent.getMinutes()}</time>
        </p>
        <p class="event__duration">${duration.getHours()}H${duration.getMinutes()}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${card.price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Order Uber</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">20</span>
         </li>
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};

export class Card extends AbstractSmartComponent {
  constructor(card) {
    super();
    this._card = card;
  }
  getTemplate() {
    return createCardTemplate(this._card);
  }

  setEditHandler(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}

