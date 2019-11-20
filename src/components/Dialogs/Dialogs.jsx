import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";


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

    const onSubmitForm = (formData) => {
        props.onMessageSend(formData.newMessageBody);
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
                <DialogsReduxForm onSubmit={onSubmitForm}/>

            </section>

        </div>
    );
};

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <section className={s.wrapperInputsForMessage}>
                <Field
                    name={"newMessageBody"}
                    component={"input"}
                    placeholder="Input your message"
                    className={s.messageTextArea}
                />
                <Button
                    name={"sendMessageButton"}
                    className={s.sendMessageButton}
                    type="submit"
                    children={"input"}
                />
            </section>
        </form>
    )
};

export const DialogsReduxForm = reduxForm({
    form: 'login',

})(DialogsForm);


export default Dialogs;
