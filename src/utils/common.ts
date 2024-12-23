import {Screens} from '@src/navigation/const';

type MenuItem = {
  id: string; // Уникальный идентификатор
  title: string; // Заголовок
  route: string; // Путь для навигации
};

export const menuData: MenuItem[] = [
  {
    id: '1',
    title: 'MENU',
    route: Screens.SHOP,
  },
  {
    id: '2',
    title: 'RESERVATION',
    route: Screens.RESERVATION,
  },
  {
    id: '3',
    title: 'EVENTS',
    route: Screens.EVENTS,
  },
  {
    id: '4',
    title: 'CONTACTS',
    route: Screens.CONTACTS,
  },
  {
    id: '5',
    title: 'BONUSES',
    route: Screens.BONUSES,
  },
];

export type Product = {
  id: number;
  title: string;
  image: ReturnType<typeof require>;
  price: number;
  quantity?: number;
};

export const breakfasts: Product[] = [
  {
    id: 1,
    title: "Tom yam with seafood",
    image: require('@src/assets/img-yellow/dishes/dishes-1/f6adecbfbf8f11ef9bb0a2566b9d985b_11.png'),
    price: 7.99,
  },
  {
    id: 2,
    title: "Chicken pasta with pesto",
    image: require('@src/assets/img-yellow/dishes/dishes-2/8f66c715bf9211efa1483ef94bc9e66e_11.png'),
    price: 4.99,
  },
  {
    id: 3,
    title: "Grilled ribs with pesto",
    image: require('@src/assets/img-yellow/dishes/dishes-3/68af694fbf9211ef9a5fc29ccd14b578_11.png'),
    price: 7.55,
  },
  {
    id: 4,
    title: "Risoni with mushrooms",
    image: require('@src/assets/img-yellow/dishes/dishes-4/8bc63f5ac08211ef86f52652804b2160_11.png'),
    price: 4.39,
  },
  {
    id: 14,
    title: "Filet mignon with yams",
    image: require('@src/assets/img-yellow/dishes/dishes-5/0d82358dc08311efad04e6a64aa512b4_11.png'),
    price: 12.99,
  },
  {
    id: 224,
    title: "Ramen with duck",
    image: require('@src/assets/img-yellow/dishes/dishes-6/779a9095c08311efab810e7f2f591fdc_11.png'),
    price: 7.33,
  },
];

export const lunches: Product[] = [
  {
    id: 21,
    title: "Honeydew \n" +
      "cake",
    image: require('@src/assets/img-yellow/desert/desert-1/desert-1.png'),
    price: 7.99,
  },
  {
    id: 22,
    title: "Sorbet",
    image: require('@src/assets/img-yellow/desert/desert-2/desert-2.png'),
    price: 4.99,
  },
  {
    id: 23,
    title: "Napoleon \n" +
      "cake",
    image: require('@src/assets/img-yellow/desert/desert-3/desert-3.png'),
    price: 7.55,
  },
  {
    id: 24,
    title: "Chocolate Pancake Cake",
    image: require('@src/assets/img-yellow/desert/desert-4/desert-4.png'),
    price: 4.39,
  },
  {
    id: 214,
    title: "Filet mignon \n" +
      "with yams",
    image: require('@src/assets/img-yellow/desert/desert-5/desert-5.png'),
    price: 12.99,
  },
];

export const dinners: Product[] = [
  {
    id: 7,
    title: "Sea buckthorn yuzu tea",
    image: require('@src/assets/img-yellow/drinks/drinks-1/drinks-1.png'),
    price: 7.99,
  },
  {
    id: 8,
    title: "Raspberry \n" +
      "smoothie",
    image: require('@src/assets/img-yellow/drinks/drinks-2/drinks-2.png'),
    price: 7.99,
  },
  {
    id: 18,
    title: "Banana \n" +
      "smoothie",
    image: require('@src/assets/img-yellow/drinks/drinks-3/drinks-3.png'),
    price: 7.99,
  },
  {
    id: 38,
    title: "Energetic",
    image: require('@src/assets/img-yellow/drinks/drinks-4/drinks-4.png'),
    price: 7.99,
  },
];

export const allProducts: Product[] = [...breakfasts, ...lunches, ...dinners];

export type EventType = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: ReturnType<typeof require>;
};

export const events: EventType[] = [
  {
    id: 1,
    title: 'Live music',
    description:
        'Enjoy the atmosphere of a romantic dinner on the restaurant terrace under the open sky, where a special menu and pleasant live music await you.',
    date: '23rd December 2024',
    time: '31.12.24, 10:00 - 00:00',
    image: require('@src/assets/img-yellow/events/events-1/image.png')
  },
  {
    id: 2,
    title: 'Cooking with the chef',
    description:
        'Join our chef for an exciting masterclass where you will learn to cook signature dishes and uncover the secrets of culinary art.',
    date: '23rd December 2024',
    time: '31.12.24, 10:00 - 00:00',
    image: require('@src/assets/img-yellow/events/events-2/image.png')
  },
  {
    id: 3,
    title: 'Preparing for Christmas',
    description:
        'Discover the perfect pairing of wines and cheeses at our gastronomic evening, where a sommelier will share insights on the best combinations and conduct a tasting.',
    date: '23rd December 2024',
    time: '31.12.24, 10:00 - 00:00',
    image: require('@src/assets/img-yellow/events/events-3/image.png')
  },
  {
    id: 4,
    title: 'Live music',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: 'Every Saturday, 15:00 - 19:00',
    image: require('@src/assets/img-yellow/events/events-1/image.png')
  },
  {
    id: 5,
    title: 'Cooking with the chef',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: 'Every Saturday, 15:00 - 19:00',
    image: require('@src/assets/img-yellow/events/events-2/image.png')
  },
  {
    id: 6,
    title: 'Preparing for Christmas',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: 'Every Saturday, 15:00 - 19:00',
    image: require('@src/assets/img-yellow/events/events-3/image.png')
  },
];
