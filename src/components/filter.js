import {filtersTemplate} from '../mock/filters';

const generateFiltersTemplate = (menu) => {
  menu.forEach((element) => {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${element.value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${element.value}" ${element.isChecked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-everything">${element.title}</label>
      </div>\n`
    );
  });
};

export const createFilterTemplate = () => {
  return (
    `<form class="trip-filters" action="#" method="get">

      ${generateFiltersTemplate(filtersTemplate)}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};
