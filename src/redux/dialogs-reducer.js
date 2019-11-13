const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messagesData: [
        {id: 1, time: `12:50`, text: 'Hi'},
        {id: 2, time: `12:50`, text: 'Hiiii'},
        {id: 3, time: `12:50`, text: 'How are you?'},
        {id: 4, time: `12:50`, text: 'London'},
        {id: 5, time: `12:50`, text: 'Why London?'},
        {id: 6, time: `12:50`, text: 'Profit!!!'},
    ],
    contactsData: [
        {imgSrc: require(`./../images/100x100-1.png`), id: 1, name: 'Vasyl'},
        {imgSrc: require(`./../images/100x100-2.png`), id: 2, name: 'Vitalya'},
        {imgSrc: require(`./../images/100x100-3.png`), id: 3, name: 'Eney'},
        {imgSrc: require(`./../images/100x100-4.png`), id: 4, name: 'Jason Born'},
        {imgSrc: require(`./../images/100x100-5.png`), id: 5, name: 'Morpheus'},
        {imgSrc: require(`./../images/100x100-6.png`), id: 6, name: 'Hulk'},
        {imgSrc: require(`./../images/100x100-7.png`), id: 7, name: 'Tony Stark'},
        {imgSrc: require(`./../images/100x100-8.png`), id: 8, name: 'Tony Montana 1'},
        {imgSrc: require(`./../images/100x100-9.png`), id: 9, name: 'Tony Montana 2'},
        {imgSrc: require(`./../images/100x100-10.png`), id: 10, name: 'Tony Montana 3'},
    ],
};
let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageObj = {
                id: state.messagesData.length + 1,
                time: new Date().toLocaleTimeString(),
                text: action.newMessageBody
            };
            if (newMessageObj.text) {
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessageObj],
                }
            }
            return  state;
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;