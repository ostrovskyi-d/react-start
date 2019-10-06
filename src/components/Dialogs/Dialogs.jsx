import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";

<<<<<<< HEAD
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


=======
const Dialogs = (props)=> {
    let contacts = props.state.dialogsPage.contactsData.map(c => (<Contact imgSrc={c.imgSrc} id={c.id} name={c.name} />));
    let messages = props.state.dialogsPage.messagesData.map(m => (<Message time={m.time} id={m.id} text={m.text} />));
    let textArea = React.createRef();

    let sendNewMessage = (event) => {
        let text = textArea.current.value;
        console.log(event)
        props.dispatch({type: "SEND-NEW-MESSAGE", newMessageText: text});
    };

>>>>>>> 35501aee448360699b37b9e0a06a091486800594
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

<<<<<<< HEAD
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

=======
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
        </div>
    );
};

export default Dialogs;
