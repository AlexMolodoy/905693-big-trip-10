import {Card} from '../components/card.js';
import {SortEvent} from '../components/sort-event.js';
import {replace} from '../utils.js';
import {AbstractSmartComponent} from '../components/abstract-smart-component.js';
import {OFFERS} from '../mock/card.js';
import {Mode} from '../const.js';

export class PointController extends AbstractSmartComponent {
  constructor(container, onDataChange, onViewChange) {
    super();
    this._container = container;
    this._onDataChange = onDataChange;
    this._card = null;
    this._cardData = {};
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;

    // this.elementNoFound = ''
    // this.elementLoading = ''
  }

  setTypeEventHandler() {
    this._card.setTypeEventHandler((e) => {
      const update = {
        type: e.target.value,
        addOptions: OFFERS.filter((offer) => offer.type === e.target.value)
      };
      const cardEditNew = new SortEvent(Object.assign({}, this._cardData, update));
      this._onDataChange(this._card, {
        type: e.target.value,
        addOptions: OFFERS.filter((offer) => offer.type === e.target.value)
      }, () => this.rerender(cardEditNew));
    });
  }

  setCloseHandler() {
    this._card.setCloseHandler(() => {
      this._mode = Mode.DEFAULT;
      this.rerender(new Card(this._cardData));
    });
  }

  setSubmitHandler() {
    if (this._card) {
      this._card.setSubmitHandler((e) => {
        e.preventDefault();
        this._card.setCloseHandler();
      });
    }
  }

  setEditHandler() {
    if (this._card) {
      this._card.setEditHandler(() => {
        this._onViewChange();
        this._mode = Mode.EDIT;
        const editCard = new SortEvent(this._cardData);
        replace(editCard, this._card);
        this._card = editCard;

        this.recoveryListeners();
      });
    }
  }

  setFavoriteHandler() {
    this._card.setFavoriteHandler(() => {

      const isFavorite = this._card.getElement().querySelector(`.event__favorite-checkbox`).checked;

      this._onDataChange(this._card, {isFavorite: !isFavorite}, () => this.rerender(this._card));
    });
  }


  renderCard(_card) {
    const card = new Card(_card);
    const cardEdit = new SortEvent(_card);

    this._cardData = _card;
    this._card = this._mode !== Mode.DEFAULT ? cardEdit : card;

    this.recoveryListeners();

    return this._card.getElement();
  }

  recoveryListeners() {
    if (this._mode !== Mode.DEFAULT) {
      this.setTypeEventHandler();
      this.setCloseHandler();
      this.setSubmitHandler();
      this.setFavoriteHandler();
    } else {
      this.setEditHandler();
    }
  }

  rerender(newElement) {
    replace(newElement, this._card);
    this._card = newElement;
    this.recoveryListeners();
  }

  setDefaultView() {
    if (this._mode === Mode.EDIT) {
      this._mode = Mode.DEFAULT;
      const activeCard = new Card(this._cardData);
      this.rerender(activeCard);
    }
  }
}
