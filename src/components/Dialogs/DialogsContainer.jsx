// import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageTextChange: (text) => {
            let action = updateNewMessageTextCreator(text);
            dispatch(action);
        },
        onMessageSend: () => {
            let action = sendMessageCreator();
            dispatch(action);
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
