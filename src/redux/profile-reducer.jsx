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


let profileReducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length + 1,
                postMessage: state.changeAblePostText,
                likes: 0
            };

            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.changeAblePostText = action.newText;
            return stateCopy;
        }
        case ADD_ONE_LIKE: {
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.forEach(post => (post.id === action.id) ? post.likes++ : false);
            console.log("REDUCER: action = ADD-LIKE::::");
            console.log(stateCopy.postsData.forEach(post => console.log(post.likes)));
            console.log("::::::::::::::::::::::::::::::");
            return stateCopy;
        }
        default:
            return state;
    }
};

export const updatePostTextCreator = (newText) => ({type: UPDATE_POST_TEXT, newText: newText});
export const addPostCreator = () => ({type: ADD_POST});
export const addOneLikeCreator = (id) => ({type: ADD_ONE_LIKE, id: id});

export default profileReducer;