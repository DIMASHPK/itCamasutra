import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./Message/Message";
import AddNewMsg from "./AddMsg/AddMsg";


const Dialogs = ({dialogsData, messages, addMessageActionCreater, reset}) => (
    <div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsData.map(item => (
                <Dialog name={item.name} id={item.id} key={item.id}/>
            ))}
        </div>
        <div className={s.messages}>
            {messages.map((item, i) => (
                <Message msg={item.msg} id={item.id} key={i}/>
            ))}
        </div>
        <div className={s.addMsg}>
            <AddNewMsg
                onSubmit={({newMessage}) => {
                    addMessageActionCreater(newMessage)
                    reset('newMessage')
                }}
            />
        </div>
    </div>
);

export default Dialogs;
