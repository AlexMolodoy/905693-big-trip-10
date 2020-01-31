const typeEvent = [
  `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeng`, `taxi`, `train`, `transport`, `trip`,
];

const tripCity = [
  `Moscow`, `New-York`, `Paris`, `Chicago`, `Los-Angels`,
];

const titles = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

export const OFFERS = [
  {name: `Add luggage`, type: `luggage`, cost: 10},
  {name: `Switch to comfort class`, type: `comfort`, cost: 150},
  {name: `Add meal`, type: `meal`, cost: 2},
  {name: `Choose seats`, type: `seats`, cost: 9},
];

// class GetRandom {
//   element(array) {
//     return array[GetRandom.number(0, array.length)];
//   }

//   elemntUnique(array, count) {
//     const unique = array.slice();
//     const result = [];

//     for (let i = 0; i < count; i++) {
//       const index = GetRandom.number(0, unique.length);
//       result.push(unique[index]);
//       result.splice(index, 1);
//     }
//     return result;
//   }

//   number(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   date() {
//     return new Date(GetRandom.number(1545264000000, 1639872000000));
//   }

//   nextDate(date, start = 1000, stop = 8035200000) {
//     return new Date(Date.parse(date) + GetRandom.number(start, stop));
//   }
// }

function getRandomElement(array) {
  return array[getRandomNumber(0, array.length)];
}

function getRandomElemntUnique(array, count) {
  const array1 = array.slice();
  const result = [];

  for (let i = 0; i < count; i++) {
    const index = getRandomNumber(0, array1.length);
    result.push(array1[index]);
    result.splice(index, 1);
  }
  return result;

}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomDate() {
  return new Date(getRandomNumber(1545264000000, 1639872000000));
}

function getRandomNextDate(date, start = 1000, stop = 8035200000) {
  return new Date(Date.parse(date) + getRandomNumber(start, stop));
}

export const cardGenerate = () => {
  const startDate = getRandomDate();
  const endDate = getRandomNextDate(startDate);

  return {
    type: getRandomElement(typeEvent),
    city: getRandomElement(tripCity),
    photo: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: getRandomElemntUnique(titles, getRandomNumber(1, 3)),
    price: getRandomNumber(20, 100),
    startEvent: startDate,
    endEvent: endDate,
    addOptions: OFFERS.slice(-2),
    isFavorite: Boolean(getRandomNumber(0, 1)),
  };
};
