import {MONTHS_MAP} from '../const.js';
import {cards} from './card.js';

const citiesOnRoute = (array) => {
  const routeCities = [];
  array.forEach((element) => {
    routeCities.push(element.city);
  });
  routeCities.join(`&mdash;`);
  return routeCities;
};

export const createRouteTemplate = () => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">${citiesOnRoute(cards)}</h1>
      <p class="trip-info__dates">${MONTHS_MAP[cards[0].startEvent.getMonth()]} ${cards[0].startEvent.getDate()}&nbsp;&mdash;&nbsp;${cards[cards.length - 1].endEvent.getDate()}</p>
    </div>`
  );
};
