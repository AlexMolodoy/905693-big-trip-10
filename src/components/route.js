import {MONTHS_MAP} from '../const.js';
import {createCardArray} from './card.js';

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
      <h1 class="trip-info__title">${citiesOnRoute(createCardArray)}</h1>
      <p class="trip-info__dates">${MONTHS_MAP.createCardArray[0].startDate.getMonth} ${createCardArray[0].startDate.getDate}&nbsp;&mdash;&nbsp;${createCardArray[createCardArray.length - 1].endDate.getDate}</p>
    </div>`
  );
};
