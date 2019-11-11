// import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        // REPLACED BY REDUX-FORM
        // onMessageTextChange: (text) => {
        //     let action = updateNewMessageTextCreator(text);
        //     dispatch(action);
        // },
        onMessageSend: (newMessageBody) => {
            let action = sendMessageCreator(newMessageBody);
            dispatch(action);
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)


