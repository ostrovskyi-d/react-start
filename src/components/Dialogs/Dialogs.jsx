import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";

const Dialogs = (props)=> {
    
    let contacts = props.state.dialogsPage.contactsData.map(c => (<Contact imgSrc={c.imgSrc} id={c.id} name={c.name} />));
    let messages = props.state.dialogsPage.messagesData.map(m => (<Message time={m.time} id={m.id} text={m.text} />));
    
    return (
        <div className={s.dialogs}>
            <section className={s.contacts}>
                <h3>CONTACTS</h3>
                <div className={s.contacts_items}>
                    {contacts}
                </div>
            </section>

            <section className={s.messages}>
                {messages}
            </section>
        </div>
    );
};

export default Dialogs;
