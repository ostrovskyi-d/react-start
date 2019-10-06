import React from "react";
import s from "./Dialogs.module.css";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store)=>{
                let updateMessageText = (text) => {
                    let action = updateNewMessageTextCreator(text);
                    store.dispatch(action);

                };
                let sendMessage = () => {
                    let action = sendMessageCreator();
                    store.dispatch(action);

                };
                return (
                    <Dialogs
                        dialogsPage={store.getState().dialogsPage}
                        onMessageTextChange={updateMessageText}
                        onMessageSend={sendMessage}
                    />
                )
            }}

        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
