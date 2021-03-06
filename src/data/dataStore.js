export const settings = {

  columnCreatorText: 'Add new column',

  cardCreatorText: 'Add new card',

  creator: {

    buttonOK: 'OK',

    buttonCancel: 'Cancel',

    defaultText: 'Add new item',

  },

  search: {

    defaultText: 'Search...',

    icon: 'search',

  },

  defaultListDescription: '<p>I can do all the things!!!</p>',

  defaultColumnIcon: 'list-alt',

  info: {
    title: 'General information about project',
    image: 'https://cdn.pixabay.com/photo/2012/01/09/09/59/earth-11595_960_720.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Filip Taczkowski',
  },

  faq: {
    title: 'Frequently asked questions',
    image: 'https://cdn.pixabay.com/photo/2015/11/07/11/02/milky-way-1030765_960_720.jpg',
    questions: [
      'Who is the author?',
      'Filp Taczkowski',
      'What is it about?',
      'Simple TO-DO app to track whatever you want',
      'Why was it made?',
      'It was primarly made to learn React :)',
    ],
  },

};



export const pageContents = {

  title: 'My first React app',

  subtitle: 'A simple to-do app, with lists, columns and cards',

};



export const listData = {

  title: 'Things to do <sup>soon!</sup>',

  description: 'Interesting things I want to check out!',

  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',

  columns: [

    {

      key: 0,

      title: 'Books',

      icon: 'book',

      cards: [

        {

          key: 0,

          title: 'This Is Going to Hurt',

        },

        {

          key: 1,

          title: 'Interpreter of Maladies',

        },

      ],

    },

    {

      key: 1,

      title: 'Movies',

      icon: 'film',

      cards: [

        {

          key: 0,

          title: 'Harry Potter',

        },

        {

          key: 1,

          title: 'Star Wars',

        },

      ],

    },

    {

      key: 2,

      title: 'Games',

      icon: 'gamepad',

      cards: [

        {

          key: 0,

          title: 'The Witcher',

        },

        {

          key: 1,

          title: 'Skyrim',

        },

      ],

    },

  ],

};



const lists = [

  {

    id: 'list-1',

    title: 'Things to do <sup>soon!</sup>',

    description: 'Interesting things I want to check out!',

    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',

  },

  {

    id: 'list-2',

    title: 'Books I want to read this year!',

    description: 'List of books and series I want to read in 2020!',

    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',

  },

  {

    id: 'list-3',

    title: 'Games I want to play this year!',

    description: 'List of games I want to play in 2020!',

    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',

  },

];



const columns = [

  {

    id: 'column-1',

    listId: 'list-1',

    title: 'Books',

    icon: 'book',

  },

  {

    id: 'column-2',

    listId: 'list-1',

    title: 'Movies',

    icon: 'film',

  },

  {

    id: 'column-3',

    listId: 'list-1',

    title: 'Games',

    icon: 'gamepad',

  },

  {

    id: 'column-4',

    listId: 'list-2',

    title: 'Strange column',

    icon: 'question',

  },

  {

    id: 'column-5',

    listId: 'list-3',

    title: 'Strange column',

    icon: 'question',

  },
];



const cards = [

  {

    id: 'card-1',

    columnId: 'column-1',

    title: 'This Is Going to Hurt',

    index: 0,

  },

  {

    id: 'card-2',

    columnId: 'column-1',

    title: 'Interpreter of Maladies',

    index: 1,

  },

  {

    id: 'card-3',

    columnId: 'column-2',

    title: 'Harry Potter',

    index: 0,

  },

  {

    id: 'card-4',

    columnId: 'column-2',

    title: 'Star Wars',

    index: 1,

  },

  {

    id: 'card-5',

    columnId: 'column-3',

    title: 'The Witcher',

    index: 0,

  },

  {

    id: 'card-6',

    columnId: 'column-3',

    title: 'Skyrim',

    index: 1,

  },

];



const initialStoreData = {

  app: {...pageContents},

  lists: [...lists],

  columns: [...columns],

  cards: [...cards],

};



export default initialStoreData;

