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
                { id: 1, time: `12:50`, text: 'Hi' },
                { id: 2, time: `12:50`, text: 'Hiiii' },
                { id: 3, time: `12:50`, text: 'How are you?' },
                { id: 4, time: `12:50`, text: 'London' },
                { id: 5, time: `12:50`, text: 'Why London?' },
                { id: 6, time: `12:50`, text: 'Profit!!!' },
            ],
    
            contactsData: [
                { imgSrc: require(`./../images/100x100-1.png`), id: 1, name: 'Vasyl' },
                { imgSrc: require(`./../images/100x100-2.png`), id: 2, name: 'Vitalya' },
                { imgSrc: require(`./../images/100x100-3.png`), id: 3, name: 'Eney' },
                {
                    imgSrc: require(`./../images/100x100-4.png`),
                    id: 4,
                    name: 'Jason Born',
                },
                { imgSrc: require(`./../images/100x100-5.png`), id: 5, name: 'Morpheus' },
                { imgSrc: require(`./../images/100x100-6.png`), id: 6, name: 'Hulk' },
                {
                    imgSrc: require(`./../images/100x100-7.png`),
                    id: 7,
                    name: 'Tony Stark',
                },
                {
                    imgSrc: require(`./../images/100x100-8.png`),
                    id: 8,
                    name: 'Tony Montana 1',
                },
                {
                    imgSrc: require(`./../images/100x100-9.png`),
                    id: 9,
                    name: 'Tony Montana 2',
                },
                {
                    imgSrc: require(`./../images/100x100-10.png`),
                    id: 10,
                    name: 'Tony Montana 3',
                },
            ],
        }
    },

//Notify subscriber if rerender was worked out
    notifySubscriber () {
        console.warn("State has been changed!!!")
        
    },

//Getter
    getState () {

        let state = this._state;
        return state;
    },

//Setter
    setState () {
        console.log("Nothing here for now")
    },

//Observer
    subscribe (observer) {
        this.notifySubscriber = observer;
    },

//Add new post to the store and rerender profile page if something changed
    addPost () {
        
        let newPostElement = {
            id: 5,
            postMessage: this._state.profilePage.changeAblePostText,
            likes: 0,
        };
        this._state.profilePage.postsData.push(newPostElement);
        this.notifySubscriber(this._state);

    },
     
//Replace existed text with a changed one
    updatePostText (newText) {
        this.getState().profilePage.changeAblePostText = newText;
        this.notifySubscriber(this._state);
    },



};
window.store = store;
export default store;
