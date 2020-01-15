import {createCardTemplate} from './components/card.js';
import {createContentTemplate} from './components/content.js';
import {createFilterTemplate} from './components/filter.js';
import {createMenuTemplate} from './components/menu.js';
import {createRouteTemplate} from './components/route.js';
import {createSortEventTemplate} from './components/sort-event.js';
import {createSortTemplate} from './components/sort.js';
import {createCardArray} from './components/card.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripInfoElement = document.querySelector(`.trip-info`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);


render(siteTripInfoElement, createRouteTemplate(), `beforeend`);
render(siteTripControlsElement, createMenuTemplate(), `beforeend`);
render(siteTripControlsElement, createFilterTemplate(), `beforeend`);
render(siteTripEventsElement, createSortTemplate(), `beforeend`);
render(siteTripEventsElement, createSortEventTemplate(), `beforeend`);
render(siteTripEventsElement, createContentTemplate(), `beforeend`);
const siteTripDaysElement = siteTripEventsElement.querySelector(`.trip-days`);
for (let i = 0; i < createCardArray.length; i++) {
  render(siteTripDaysElement, createCardTemplate(createCardArray[i]), `beforeend`);
}
