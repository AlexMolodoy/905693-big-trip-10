import {Card} from './components/card.js';
import {Content} from './components/content.js';
import {Filter} from './components/filter.js';
import {Menu} from './components/menu.js';
import {Route} from './components/route.js';
import {SortEvent} from './components/sort-event.js';
import {Sort} from './components/sort.js';
import {cards} from './components/card.js';

const render = (container, template) => {
  container.append(template);
};

const siteTripInfoElement = document.querySelector(`.trip-info`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);


render(siteTripInfoElement, new Route().getElement());
render(siteTripControlsElement, new Menu().getElement());
render(siteTripControlsElement, new Filter().getElement());
render(siteTripEventsElement, new Sort().getElement());
render(siteTripEventsElement, new SortEvent().getElement());
render(siteTripEventsElement, new Content().getElement());
const siteTripDaysElement = siteTripEventsElement.querySelector(`.trip-days`);
for (let i = 0; i < cards.length; i++) {
  const card = new Card(cards[i]);
  const cardEdit = new SortEvent(cards[i]);

  card.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    siteTripDaysElement.replaceChild(cardEdit.getElement(), card.getElement());
    cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      siteTripDaysElement.replaceChild(card.getElement(), cardEdit.getElement());
    });

    card.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
      siteTripDaysElement.replaceChild(cardEdit.getElement(), card.getElement());
      cardEdit.getElement().querySelector(`.event__save-btn`).addEventListener(`click`, () => {
        siteTripDaysElement.replaceChild(card.getElement(), cardEdit.getElement());
      });
    });
  });

  render(siteTripDaysElement, card.getElement());
}
