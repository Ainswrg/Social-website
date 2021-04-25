import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message';

const Dialogs = (props) => {
   let state = props.store.getState().dialogPage;
   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   
   return (
      <div className={s.dialogs}>
         <div className={s.dialog + ' ' + s.active}>
            {dialogsElements}
         </div>
         <Message
            store = {props.store}
               sendMessage={props.sendMessage}
               updateNewMessageBody={props.updateNewMessageBody}/>
      </div >
   )
}

export default Dialogs;