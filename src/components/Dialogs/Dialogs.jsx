import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let contacts = state.contactsData.map(c => (
        <Contact
            imgSrc={c.imgSrc}
            id={c.id}
            name={c.name}
            key={c.id}
        />
    ));

    let messages = state.messagesData.map(m => (
        <Message
            time={m.time}
            id={m.id}
            text={m.text}
            key={m.id}

        />
    ));

    const formOnSubmit = (formData) => {
        props.onMessageSend()
        formData.newMessageBody = "";
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
                <DialogsReduxForm onSubmit={formOnSubmit} {...props}/>

            </section>

        </div>
    );
};

const DialogsForm = (props) => {
    let onMessageTextChange = (e) => {
        debugger
        if (state.updatedMessageText === "prop") {
            props.onMessageTextChange(e.currentTarget.value);
        }

    };

    let onMessageSend = (e) => {
        props.onMessageSend();
    };
    let state = props.dialogsPage;

    return (
        <form onSubmit={props.handleSubmit}>
            <section className={s.wrapperInputsForMessage}>
                <Field
                    name={"newMessageBody"}
                    component={"textarea"}
                    onChange={onMessageTextChange}
                    placeholder="Input your message"
                    className={s.messageTextArea}
                    value={state.updatedMessageText}
                />
                <Field
                    name={"sendMessageButton"}
                    component={"input"}
                    value=""
                    className={s.sendMessageButton}
                    onClick={onMessageSend}
                    type="submit"
                />

            </section>
        </form>
    )
};

export const DialogsReduxForm = reduxForm({
    form: 'login'
})(DialogsForm);


export default Dialogs;
