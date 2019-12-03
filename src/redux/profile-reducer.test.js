import profileReducer, {addPostAC, deletePost} from "./profile-reducer";

let state = {
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

};
test('posts length must be reduced', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3)
});

test('posts length must be increased', () => {
    let action = addPostAC("example");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
});
// test('post id must be incremented by 1' , () => {
//     let action = addPostAC("example");
//     let newState = profileReducer(state, action);
//     expect(newState.postsData.length).toBe(5);
// });