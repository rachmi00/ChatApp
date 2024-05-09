import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from 'moment';


function Message({message}){

    const [user] = useAuthState(auth);
    const createdAt = message.createdAt.toDate();
const formattedDate = moment(createdAt).format('MMMM Do, YYYY h:mm A');

   return(
    <div
    className={`chat-bubble ${message.uid === user.uid? "right" : ""}`}
  >
    <img
      className="chat-bubble__left"
      src={message.avatar}
      alt="user avatar"
    />
    <div className="chat-bubble__right">
      <p className="user-name">{message.name}</p>
      <p className="user-message">{message.text} </p>
      <p>{formattedDate}</p>
    </div>
  </div>
   )
}
export default Message