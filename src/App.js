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

  return (
      <div>
        <div className='app-wrapper'>
          <Header />
          <Navbar sidebar={props.appState.sidebar}/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/profile"
                     element={<Profile
                       profileState={props.appState.profilePage}
                       addPost={props.addPost} />} />
              <Route path="/dialogs/*"
                     element={<Dialogs
                       dialogsState={props.appState.dialogsPage}
                     />} />
              <Route path="/news"
                     element={<News />} />
              <Route path="music"
                     element={<Music />} />
              <Route path="/settings"
                     element={<Settings />} />
              <Route path="/friends" element={props.appState.sidebar} />
            </Routes>
          </div>
        </div>
      </div>
    );
}

export default App;
