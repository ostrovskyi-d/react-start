<<<<<<< HEAD
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {
//                     id: 1,
//                     postMessage: 'Some information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
//                     likes: 12
//                 },
//                 {
//                     id: 2,
//                     postMessage: 'Information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
//                     likes: 200
//                 },
//                 {
//                     id: 3,
//                     postMessage: 'kuku',
//                     likes: 213
//                 },
//                 {
//                     id: 4,
//                     postMessage: 'Lol, rofl, chillout, nice flex',
//                     likes: 100500
//                 },
//             ],
//             changeAblePostText: '',
//         },
//         dialogsPage: {
//             updatedMessageText: '',
//             messagesData: [
//                 {id: 1, time: `12:50`, text: 'Hi'},
//                 {id: 2, time: `12:50`, text: 'Hiiii'},
//                 {id: 3, time: `12:50`, text: 'How are you?'},
//                 {id: 4, time: `12:50`, text: 'London'},
//                 {id: 5, time: `12:50`, text: 'Why London?'},
//                 {id: 6, time: `12:50`, text: 'Profit!!!'},
//             ],
//             contactsData: [
//                 {imgSrc: require(`./../images/100x100-1.png`), id: 1, name: 'Vasyl'},
//                 {imgSrc: require(`./../images/100x100-2.png`), id: 2, name: 'Vitalya'},
//                 {imgSrc: require(`./../images/100x100-3.png`), id: 3, name: 'Eney'},
//                 {imgSrc: require(`./../images/100x100-4.png`), id: 4, name: 'Jason Born'},
//                 {imgSrc: require(`./../images/100x100-5.png`), id: 5, name: 'Morpheus'},
//                 {imgSrc: require(`./../images/100x100-6.png`), id: 6, name: 'Hulk'},
//                 {imgSrc: require(`./../images/100x100-7.png`), id: 7, name: 'Tony Stark'},
//                 {imgSrc: require(`./../images/100x100-8.png`), id: 8, name: 'Tony Montana 1'},
//                 {imgSrc: require(`./../images/100x100-9.png`), id: 9, name: 'Tony Montana 2'},
//                 {imgSrc: require(`./../images/100x100-10.png`), id: 10, name: 'Tony Montana 3'},
//             ],
//         },
//         sideBar: {}
//     },
//     _notifySubscriber() {
//         console.warn("State has been changed!!!")
//     },
//     getState() {
//         return this._state;
//     },
//     setState() {
//         console.log("Nothing here for now")
//     },
//     subscribe(observer) {
//         this._notifySubscriber = observer;
//     },
//     dispatch(action) {
//         this.getState().profilePage = profileReducer(this.getState().profilePage, action);
//         this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
//         this._notifySubscriber(this.getState());
//     }
// };
//
//
// window.store = store;
// export default store;
//
//
// // addPost () {
// //     let newPostElement = {
// //         id: 5,
// //         postMessage: this._state.profilePage.changeAblePostText,
// //         likes: 0,
// //     };
// //     this._state.profilePage.postsData.push(newPostElement);
// //     this.notifySubscriber(this._state);
// // },
// // updatePostText (newText) {
// //     this.getState().profilePage.changeAblePostText = newText;
// //     this.notifySubscriber(this._state);
// // },
//
//
// // dispatch(action) {
// //     switch (action.type) {
// //         case UPDATE_NEW_MESSAGE_TEXT:
// //             this.getState().dialogsPage.updatedMessageText = action.updatedMessageText;
// //             this.notifySubscriber(this._state);
// //             break;
// //         case SEND_MESSAGE:
// //             let newMessageObj = {
// //                 id: this.getState().dialogsPage.messagesData.length + 1,
// //                 time: new Date().toLocaleTimeString(),
// //                 text: this.getState().dialogsPage.updatedMessageText
// //             };
// //             this.getState().dialogsPage.messagesData.push(newMessageObj);
// //             this.notifySubscriber(this._state);
// //             break;
// //         case ADD_POST:
// //             if(this.getState().profilePage.changeAblePostText !== '') {
// //                 let newPost = {
// //                 id: this.getState().profilePage.postsData.length + 1,
// //                 postMessage: this.getState().profilePage.changeAblePostText,
// //                 likes: 0
// //                 };
// //                 this.getState().profilePage.postsData.unshift(newPost);
// //                 this.dispatch(updatePostTextCreator(""));
// //                 this.notifySubscriber(this._state);
// //             } else {
// //                 alert("Empty not allowed!");
// //             }
// //             break;
// //         case UPDATE_POST_TEXT:
// //             this.getState().profilePage.changeAblePostText = action.newText;
// //             this.notifySubscriber(this._state);
// //             break;
// //         case ADD_ONE_LIKE:
// //
// //             this.getState().profilePage.postsData.forEach(post => (post.id === action.id) ? post.likes++ : false);
// //             this.notifySubscriber(this._state);
// //             break;
// //         default:
// //             alert("NO SUCH ACTION")
// //     }
// // }
=======
let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    postMessage: 'Some information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
                    likes: 12,
                },
                {
                    id: 2,
                    postMessage: 'Information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
                    likes: 200,
                },
                {
                    id: 3,
                    postMessage: 'kuku',
                    likes: 213,
                },
                {
                    id: 4,
                    postMessage: 'Lol, rofl, chillout, nice flex',
                    likes: 100500,
                },
            ],
            changeAblePostText: '',
        },
        dialogsPage: {
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
                {imgSrc: require(`./../images/100x100-4.png`), id: 4, name: 'Jason Born',},
                {imgSrc: require(`./../images/100x100-5.png`), id: 5, name: 'Morpheus'},
                {imgSrc: require(`./../images/100x100-6.png`), id: 6, name: 'Hulk'},
                {imgSrc: require(`./../images/100x100-7.png`), id: 7, name: 'Tony Stark'},
                {imgSrc: require(`./../images/100x100-8.png`), id: 8, name: 'Tony Montana 1'},
                {imgSrc: require(`./../images/100x100-9.png`), id: 9, name: 'Tony Montana 2'},
                {imgSrc: require(`./../images/100x100-10.png`), id: 10, name: 'Tony Montana 3'},
            ],
        }
    },
    notifySubscriber() {
        console.warn("State has been changed!!!")
    },
    getState() {
        let state = this._state;
        return state;
    },
    setState() {
        console.log("Nothing here for now")
    },
    subscribe(observer) {
        this.notifySubscriber = observer;
    },
    // addPost() {
    //     let newPostElement = {
    //         id: 5,
    //         postMessage: this._state.profilePage.changeAblePostText,
    //         likes: 0,
    //     };
    //     this._state.profilePage.postsData.push(newPostElement);
    //     this.notifySubscriber(this._state);
    // },
    // updatePostText(newText) {
    //     this.getState().profilePage.changeAblePostText = newText;
    //     this.notifySubscriber(this._state);
    // },
    dispatch(action) {
        if(action.type === "ADD-POST") {
            let newPostElement = {
                id: this.getState().profilePage.postsData.length + 1,
                postMessage: this._state.profilePage.changeAblePostText,
                likes: 0,
            };
            this.getState().profilePage.postsData.unshift(newPostElement);
            this.notifySubscriber(this._state);
            this.dispatch({type: "UPDATE-POST-TEXT", newText: ''})
        }
        else if (action.type === "UPDATE-POST-TEXT") {
            this.getState().profilePage.changeAblePostText = action.newText;
            this.notifySubscriber(this._state);
            console.log("post UPDATED");

        }
        else if (action.type === "ADD-LIKE") {
            
            this.getState().profilePage.postsData.forEach( (post) => (post.id === action.id) ? post.likes++ : false);
            this.notifySubscriber(this._state);

        }
        else if (action.type === "SEND-NEW-MESSAGE") {
            let newMessageElement = {
                id: this.getState().dialogsPage.messagesData.length + 1,
                time: `${new Date().toLocaleTimeString()}`,
                text: action.newMessageText
            };

            this.getState().dialogsPage.messagesData.push(newMessageElement);
            this.notifySubscriber(this._state);
        }
    }
};
window.store = store;
export default store;
>>>>>>> 35501aee448360699b37b9e0a06a091486800594
