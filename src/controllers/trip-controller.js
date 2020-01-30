import {render} from '../utils.js';
import {PointController} from './point-controller.js';

export class TripController {
  constructor(container) {
    this._container = container;
    this._events = [];

    this._onDataChange = this._onDataChange.bind(this);
  }
  _onDataChange(oldEvent, update, callback) {
    const index = this._events.findIndex((event) => oldEvent === event);
    this._events[index] = Object.assign(oldEvent, update);
    callback(this._events[index]);
    // this.render(this._events);
    // this.elementNoFound = ''
    // this.elementLoading = ''
  }
  render(events) {
    this.events = events;
    events.forEach((event) =>{
      const tripElement = new PointController(this._onViewChange, this._container, this._onDataChange);

      render(this._container, tripElement.renderCard(event));
    });
  }
  _onViewChange(events) {
    this.events = events;
    events.forEach((event) =>{
      const tripElement = new PointController(event);
      tripElement.setDefaultView();
    });

  }
}
