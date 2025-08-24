import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {rerenderEntireTree} from "./render";

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App
//           appState={state}
//           addPost={addPost}
//         />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// };

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
