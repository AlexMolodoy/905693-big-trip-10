import {createCardTemplate} from './components/cardTemplate.js';
import {createContentTemplate} from './components/contentTemplate.js';
import {createFilterTemplate} from './components/filterTemplate.js';
import {createMenuTemplate} from './components/menuTemplate.js';
import {createRouteTemplate} from './components/routeTemplate.js';
import {createSortEventTemplate} from './components/sortEventTemplate.js';
import {createSortTemplate} from './components/sortTemplate.js';

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
for (let i = 0; i < 3; i++) {
  render(siteTripDaysElement, createCardTemplate(), `beforeend`);
}
