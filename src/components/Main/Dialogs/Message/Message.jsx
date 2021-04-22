import React from 'react';
import s from './Message.module.css';
import MessageInput from './MessageInput/MessageInput';
import User from './User/User';
import UserResponder from './UserResponder/UserResponder';


const Message = (props) => {
   let state = props.store.getState().dialogPage;

   let incomingDataElement = state.incomingMessages.map(m => <UserResponder message={m.message} time={m.time} />);
   
   let outgoingDataElement = state.outgoingMessages.map(m => <User message={m.message} time={m.time} />);

   return (
      <div>
         <div className={s.messages} >
            {incomingDataElement}
            {outgoingDataElement}
         </div>
         <MessageInput
            store = {props.store}
            dispatch={props.dispatch} />
      </div>
   )
}

export default Message;