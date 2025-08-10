import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let postsData = [
  {id: 0, message: 'Hi, how are you?', likesCount: 50},
  {id: 1, message: "It's my first post", likesCount: 20},
  {id: 2, message: "Еще один пост для жирка", likesCount: 100},
  {id: 3, message: "Ну и четвертый пост, как закрывашечка", likesCount: 15},
];

let dialogsData = [
  {id: 1, name: 'Anton'},
  {id: 2, name: 'Bulivif'},
  {id: 3, name: 'Varvara'},
  {id: 4, name: 'Gleb'},
  {id: 5, name: 'Regina'}
];

let messagesData = [
  {id: 0, message: 'Hi'},
  {id: 1, message: 'Hello! How are you?'},
  {id: 2, message: 'Yo!'},
  {id: 3, message: 'Wazzup'},
  {id: 4, message: 'Wazzup 2'},
  {id: 5, message: 'Wazzup 3'},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
