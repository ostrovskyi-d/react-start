import React from "react";
import s from "./Contact.module.css";
import { NavLink } from "react-router-dom";

const Contact = props => {
    return (
        <div className={`${s.contact} ${s.contacts_wrapper}`}>
            <li>
                <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </li>
        </div>
    );
};

export default Contact;
