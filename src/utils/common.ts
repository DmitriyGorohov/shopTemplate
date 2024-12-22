import {Screens} from '@src/navigation/const';

type MenuItem = {
  id: string; // Уникальный идентификатор
  title: string; // Заголовок
  icon: ReturnType<typeof require>; // Иконка с использованием require()
  route: string; // Путь для навигации
};

export const menuData: MenuItem[] = [
  {
    id: '1',
    title: 'Shop',
    icon: require('@src/assets/img/shop-icon/solar_shop-bold.png'),
    route: Screens.SHOP,
  },
  {
    id: '2',
    title: 'Reservation',
    icon: require('@src/assets/img/reservation/ic_baseline-table-bar.png'),
    route: Screens.RESERVATION,
  },
  {
    id: '3',
    title: 'Contacts',
    icon: require('@src/assets/img/contacts/iconamoon_phone-fill.png'),
    route: Screens.CONTACTS,
  },
  {
    id: '4',
    title: 'Restaurant events',
    icon: require('@src/assets/img/events/clarity_event-solid.png'),
    route: Screens.EVENTS,
  },
  {
    id: '5',
    title: 'Bonuses',
    icon: require('@src/assets/img/bonuses/tabler_gift-filled.png'),
    route: Screens.BONUSES,
  },
];

export type Product = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>;
  price: number;
  quantity?: number;
  oldPrice?: number;
  calories: string;
  weight: string;
};

export const breakfasts: Product[] = [
  {
    id: 1,
    title: "Rice porridge with lingonberries",
    description: "320 Kcal, 131 g",
    image: require('@src/assets/img/product-image/image.png'),
    price: 29,
    oldPrice: 35,
    calories: "320 Kcal",
    weight: "131 g",
  },
  {
    id: 2,
    title: "Semolina cake with cherry jam",
    description: "282 Kcal, 224 g",
    image: require('@src/assets/img/image-b-2/image.png'),
    price: 29,
    oldPrice: 35,
    calories: "282 Kcal",
    weight: "224 g",
  },
  {
    id: 3,
    title: "Cheese pancakes with strawberry jam",
    description: "291 Kcal, 130 g",
    image: require('@src/assets/img/image-b-3/image.png'),
    price: 29,
    oldPrice: 35,
    calories: "291 Kcal",
    weight: "130 g",
  },
  {
    id: 4,
    title: "Croissant with ham and cheese",
    description: "433 Kcal, 110 g",
    image: require('@src/assets/img/image-b-4/image.png'),
    price: 29,
    oldPrice: 35,
    calories: "433 Kcal",
    weight: "110 g",
  },
];

export const lunches: Product[] = [
  {
    id: 5,
    title: "Grilled chicken with vegetables",
    description: "520 Kcal, 300 g",
    image: require('@src/assets/img/image-l-1/image.png'),
    price: 49,
    oldPrice: 55,
    calories: "520 Kcal",
    weight: "300 g",
  },
  {
    id: 6,
    title: "Vegetable salad with dressing",
    description: "150 Kcal, 200 g",
    image: require('@src/assets/img/image-l-2/image.png'),
    price: 25,
    calories: "150 Kcal",
    weight: "200 g",
  },
  {
    id: 26,
    title: "Vegetable salad with dressing",
    description: "150 Kcal, 200 g",
    image: require('@src/assets/img/image-l-3/image.png'),
    price: 25,
    calories: "150 Kcal",
    weight: "200 g",
  },
  {
    id: 36,
    title: "Vegetable salad with dressing",
    description: "150 Kcal, 200 g",
    image: require('@src/assets/img/image-l-4/image.png'),
    price: 25,
    calories: "150 Kcal",
    weight: "200 g",
  },
];

export const dinners: Product[] = [
  {
    id: 7,
    title: "Beef steak with rice with potatoes",
    description: "650 Kcal, 350 g",
    image: require('@src/assets/img/image-l-2/image.png'),
    price: 59,
    oldPrice: 65,
    calories: "650 Kcal",
    weight: "350 g",
  },
  {
    id: 8,
    title: "Fish fillet with rice with potatoes",
    description: "430 Kcal, 300 g",
    image: require('@src/assets/img/image-l-4/image.png'),
    price: 45,
    calories: "430 Kcal",
    weight: "300 g",
  },
  {
    id: 18,
    title: "Fish fillet with rice with potatoes",
    description: "430 Kcal, 300 g",
    image: require('@src/assets/img/image-l-3/image.png'),
    price: 45,
    calories: "330 Kcal",
    weight: "240 g",
  },
  {
    id: 38,
    title: "Chopped beef in creamy sauce with spinach and spaghetti",
    description: "430 Kcal, 300 g",
    image: require('@src/assets/img/image-l-1/image.png'),
    price: 29,
    calories: "420 Kcal",
    weight: "250 g",
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
    title: 'Dinner Under the Stars',
    description:
        'Enjoy the atmosphere of a romantic dinner on the restaurant terrace under the open sky, where a special menu and pleasant live music await you.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-1/event-1.png')
  },
  {
    id: 2,
    title: 'Gastronomic Masterclass',
    description:
        'Join our chef for an exciting masterclass where you will learn to cook signature dishes and uncover the secrets of culinary art.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-2/event-2.png')
  },
  {
    id: 3,
    title: 'Wine and Cheese Evening',
    description:
        'Discover the perfect pairing of wines and cheeses at our gastronomic evening, where a sommelier will share insights on the best combinations and conduct a tasting.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-3/event-3.png')
  },
  {
    id: 4,
    title: 'Theme of the Night: Italian Celebration',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-1/event-1.png')
  },
  {
    id: 5,
    title: 'Theme of the Night: Italian Celebration',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-2/event-2.png')
  },
  {
    id: 6,
    title: 'Theme of the Night: Italian Celebration',
    description:
        'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
    date: '23rd December 2024',
    time: '6:00 PM – 11:00 PM',
    image: require('@src/assets/img/event-3/event-3.png')
  },
];
