import {Content} from './components/content.js';
import {Filter} from './components/filter.js';
import {Menu} from './components/menu.js';
import {Route} from './components/route.js';
import {Sort} from './components/sort.js';
import {cards} from './components/card.js';
import {render} from './utils.js';
import {TripController} from './controllers/trip-controller.js';

// const render = (container, template) => {
//   container.append(template);
// };

const siteTripInfoElement = document.querySelector(`.trip-info`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);

render(siteTripInfoElement, new Route().getElement());
render(siteTripControlsElement, new Menu().getElement());
render(siteTripControlsElement, new Filter().getElement());
render(siteTripEventsElement, new Sort().getElement());
render(siteTripEventsElement, new Content().getElement());

const tripController = new TripController(siteTripEventsElement.querySelector(`.trip-days`));
tripController.render(cards);
