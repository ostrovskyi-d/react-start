import React from "react";
import s from "./Contact.module.scss";
import {NavLink} from "react-router-dom";

const Contact = props => {
    

    return (
        <div className={`${s.contact} ${s.contacts_wrapper}`}>
            <li>
                <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>
                    <div className={s.contact_avatar}>  
                        <img src={props.imgSrc} alt='Avatar'/>
                    </div>
                    {props.name}
                </NavLink>
            </li>
        </div>
    );
};

export default Contact;
