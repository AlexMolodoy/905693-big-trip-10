const typeEvent = [
  `bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeng`, `taxi`, `train`, `transport`, `trip`,
];

const tripCity = [
  `Moscow`, `New-York`, `Paris`, `Chicago`, `Los-Angels`,
];

const title = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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

const OFFERS = [
  {name: `Add luggage`, type: `luggage`, cost: 10},
  {name: `Switch to comfort class`, type: `comfort`, cost: 150},
  {name: `Add meal`, type: `meal`, cost: 2},
  {name: `Choose seats`, type: `seats`, cost: 9},
];

function getRandomElement(array, min = 1, max = 1, count = 1) {
  const rndElement = [];
  for (const i = 0; i < count; i++) {
    const element = array[getRandomNumber(min, max)];
    rndElement.push({element});
  }
  return rndElement;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomDate() {
  return new Date();
}

function getRandomNextDate(date, start = 1000, stop = 8035200000) {
  return new Date(Date.parse(date) + getRandomNumber(start, stop));
}

export const cardGenerate = () => {
  const startDate = getRandomDate();

  return {
    startDate,
    icon: getRandomElement(typeEvent),
    city: getRandomElement(tripCity),
    photo: `http://picsum.photos/300/150?r=${Math.random()}`,
    description: getRandomElement(title, 1, title.length, getRandomNumber(1, 3)),
    price: getRandomNumber(20, 100),
    endDate: getRandomNextDate(startDate),
    addOptions: OFFERS.slice(-2),
  };
};
