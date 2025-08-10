import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";

const App = (props) => {

  // let postsData = [
  //   {id: 0, message: 'Hi, how are you?', likesCount: 50},
  //   {id: 1, message: "It's my first post", likesCount: 20},
  //   {id: 2, message: "Еще один пост для жирка", likesCount: 100},
  //   {id: 3, message: "Ну и четвертый пост, как закрывашечка", likesCount: 15},
  // ];

  // let dialogsData = [
  //   {id: 1, name: 'Anton'},
  //   {id: 2, name: 'Bulivif'},
  //   {id: 3, name: 'Varvara'},
  //   {id: 4, name: 'Gleb'},
  //   {id: 5, name: 'Regina'}
  // ];

  return (
      <div>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile" element={<Profile postsData={props.postsData} />} />
              <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
              <Route path="/news" element={<News />} />
              <Route path="music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    );
}

export default App;
