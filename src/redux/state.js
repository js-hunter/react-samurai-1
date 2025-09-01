import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    postsData: [
      {id: 0, message: 'Hi, how are you?', likesCount: 50},
      {id: 1, message: "It's my first post", likesCount: 20},
      {id: 2, message: "Еще один пост для жирка", likesCount: 100},
      {id: 3, message: "Ну и четвертый пост, как закрывашечка", likesCount: 15},
    ],
    newPostText: 'it-kamasutra.com',
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Anton'},
      {id: 2, name: 'Bulivif'},
      {id: 3, name: 'Varvara'},
      {id: 4, name: 'Gleb'},
      {id: 5, name: 'Regina'}
    ],
    messagesData: [
      {id: 0, message: 'Hi'},
      {id: 1, message: 'Hello! How are you?'},
      {id: 2, message: 'Yo!'},
      {id: 3, message: 'Wazzup'},
      {id: 4, message: 'Wazzup 2'},
      {id: 5, message: 'Wazzup 3'},
    ],
  },

  sidebar: [
    {id: 0, name: 'Andrew', image: 'https://cojo.ru/wp-content/uploads/2022/12/krutoi-kot-4-1.webp'},
    {id: 1, name: 'Sasha', image: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'},
    {id: 2, name: 'Sveta', image: 'https://vincent.enthub.it/stories/images/73fe876a-5e26-4265-8edb-17e708416afe.webp'},
  ]
}

window.state = state;

export let addPost = ()=> {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;

