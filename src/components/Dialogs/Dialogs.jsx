import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let updatedMessageText = state.updatedMessageText;
    let contacts = state.contactsData.map(c => (
            <Contact
                imgSrc={c.imgSrc}
                id={c.id}
                name={c.name}
            />
        )
    );

    let messages = state.messagesData.map(m => (
            <Message
                time={m.time}
                id={m.id}
                text={m.text}
            />
        )
    );

    let onMessageTextChange = (e) => {
        props.onMessageTextChange(e.target.value);

    };

    let onMessageSend = (e) => {
        props.onMessageSend();

    };


    return (
        <div className={s.dialogs}>
            <section className={s.contacts}>
                <h3>CONTACTS</h3>
                <div className={s.contacts_items}>
                    {contacts}
                </div>
            </section>

            <section className={s.messagesElementsWrapper}>
                <div className={s.messages}>
                    {messages}
                </div>
                <section className={s.wrapperInputsForMessage}>

                    <textarea
                        onChange={onMessageTextChange}
                        placeholder="Input your message"
                        className={s.messageTextArea}
                        value={updatedMessageText}
                    />
                    <input
                        value=""
                        className={s.sendMessageButton}
                        onClick={onMessageSend}
                        type="submit"
                    />

                </section>
            </section>

        </div>
    );
};

export default Dialogs;
