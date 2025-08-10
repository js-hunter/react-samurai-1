import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  // let dialogsData = [
  //   {id: 1, name: 'Anton'},
  //   {id: 2, name: 'Bulivif'},
  //   {id: 3, name: 'Varvara'},
  //   {id: 4, name: 'Gleb'},
  //   {id: 5, name: 'Regina'}
  // ];

  // let messagesData = [
  //   {id: 0, message: 'Hi'},
  //   {id: 1, message: 'Hello! How are you?'},
  //   {id: 2, message: 'Yo!'},
  //   {id: 3, message: 'Wazzup'},
  //   {id: 4, message: 'Wazzup 2'},
  //   {id: 5, message: 'Wazzup 3'},
  // ];

  let dialogsElements = props.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  });

  let messagesElements = props.messagesData.map(mes => <Message message={mes.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;