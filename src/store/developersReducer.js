const initialState = [
  {
    id: 69,
    email: "rein@rein.lol",
    name: "rein",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T11:19:28.218Z",
    technologies: []
  },
  {
    id: 70,
    email: "rein@rein.wut",
    name: "rein",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T11:27:38.431Z",
    technologies: []
  },
  {
    id: 71,
    email: "rein@rein.co.uk",
    name: "Rein",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T11:30:12.543Z",
    technologies: []
  },
  {
    id: 74,
    email: "chahi@codaisseur.com",
    name: "Chahi",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T13:35:36.372Z",
    technologies: []
  },
  {
    id: 75,
    email: "qwerty@mail.ru",
    name: "Ksenia the second",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T13:48:47.591Z",
    technologies: []
  }
];

export default function developersReducer(state = initialState, action) {
  console.log("did i receive an action");
  switch (action.type) {
    case "FETCHED_DEVELOPERS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
