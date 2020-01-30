import {Card} from '../components/card.js';
import {SortEvent} from '../components/sort-event.js';
import {render, replace} from '../utils.js';

export class PointController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this.onViewChange();

    // this.elementNoFound = ''
    // this.elementLoading = ''
  }


  renderCard(_card) {
    const card = new Card(_card);
    const cardEdit = new SortEvent(_card);

    card.setEditHandler(() => {
      replace(cardEdit, card);
      cardEdit.setCloseHandler(() => {
        replace(card, cardEdit);
      });
      cardEdit.setSubmitHandler((evt) => {
        evt.preventDefault();
        replace(card, cardEdit);
      });
      cardEdit.setFavoriteHandler(() => {
        const isFavorite = cardEdit.getElement().querySelector(`.event__favorite-checkbox`).checked;

        this._onDataChange(_card, {isFavorite: !isFavorite}, (event) => render(this._container, this.renderCard(event)));


      });
    });
    return card.getElement();
  }

  setDefaultView() {

  }
}
