import {cardGenerate} from '../mock/card.js';

const cardArray = [];

export const createCardArray = () => {
  for (let i = 0; i < 5; i++) {
    cardArray.push(cardGenerate());
  }
  return cardArray;
};

export const createCardTemplate = (card) => {
  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${card.photo}" alt="Event type icon">
      </div>
      <h3 class="event__title">Taxi to airport</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${card.startDate.getYear}-${card.startDate.getMonth}-${card.startDate.getDate}T${card.startDate.getHours}:${card.startDate.getMinutes}">${card.startDate.getHours}:${card.startDate.getMinutes}</time>
          &mdash;
          <time class="event__end-time" datetime="${card.endDate.getYear}-${card.endDate.getMonth}-${card.endDate.getDate}T${card.endDate.getHours}:${card.endDate.getMinutes}">${card.endDate.getHours}:${card.endDate.getMinutes}</time>
        </p>
        <p class="event__duration">1H 30M</p>
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
