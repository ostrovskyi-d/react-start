const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_ONE_LIKE = "ADD-ONE-LIKE";

let initialState = {
    postsData: [
        {
            id: 1,
            postMessage: 'Some information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
            likes: 12
        },
        {
            id: 2,
            postMessage: 'Information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!',
            likes: 200
        },
        {
            id: 3,
            postMessage: 'kuku',
            likes: 213
        },
        {
            id: 4,
            postMessage: 'Lol, rofl, chillout, nice flex',
            likes: 100500
        },
    ],
    changeAblePostText: '',
};

let profileReducer = (state = initialState, action ) => {

    switch (action.type) {
        case ADD_POST:
            // if (state.changeAblePostText !== '') {
                let newPost = {
                    id: state.postsData.length + 1,
                    postMessage: state.changeAblePostText,
                    likes: 0
                };
                state.postsData.unshift(newPost);
                state.changeAblePostText = '';
            // } else alert("Empty posts not allowed!");
            return state;
        case UPDATE_POST_TEXT:
            state.changeAblePostText = action.newText;
            return state;
        case ADD_ONE_LIKE:
            state.postsData.forEach(post => (post.id === action.id) ? post.likes++ : false);
            return state;
        default: return state;
    }
};

export const updatePostTextCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const addPostCreator = () => ({type: ADD_POST});
export const addOneLikeCreator = (id) => ({type: ADD_ONE_LIKE, id: id});

export default profileReducer;