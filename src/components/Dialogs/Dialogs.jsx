import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";

const Dialogs = (props)=> {
    let contacts = props.state.dialogsPage.contactsData.map(c => (<Contact imgSrc={c.imgSrc} id={c.id} name={c.name} />));
    let messages = props.state.dialogsPage.messagesData.map(m => (<Message time={m.time} id={m.id} text={m.text} />));
    let textArea = React.createRef();

    let sendNewMessage = (event) => {
        let text = textArea.current.value;
        console.log(event)
        props.dispatch({type: "SEND-NEW-MESSAGE", newMessageText: text});
    };

    return (
        <div className={s.dialogs}>
            <section className={s.contacts}>
                <h3>CONTACTS</h3>
                <div className={s.contacts_items}>
                    {contacts}
                </div>
            </section>
            <div className={s.messagesWrapper}>
                <section className={s.messages}>
                    {messages}
                </section>
                <div className={s.sendMessageBlock}>
                    <textarea ref={textArea} className={s.inputMessageArea} name="message-field"  />
                    <input onClick={sendNewMessage} className={s.sendMessageButton} type="submit" value="SEND"/>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;
