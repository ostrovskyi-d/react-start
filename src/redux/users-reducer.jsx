const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const FOLLOW_USER = "FOLLOW-USER";
// const action3 = "action3";

let initialState = {
    usersStore: [
        {
            id: 1,
            nickName: "NickName",
            status: "away from keyboard",
            location: {
                country: "Ukraine",
                city: "Kiev"
            }
        },
        {
            id: 2,
            nickName: "NickName2",
            status: "away from brain",
            location: {
                country: "Russia",
                city: "Moscow"
            }
        },
        {
            id: 3,
            nickName: "NickName3",
            status: "away from mouse",
            location: {
                country: "Belarus",
                city: "Minsk"
            }
        },
    ],
    selectedUser: null,
    subscribed: [],
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            console.log("SHOW MORE USERS")
            return {...state};
        }
        case FOLLOW_USER: {
            console.log("FOLLOW THIS USER");
            return {...state};

        }
        // case action3: {
        //     return {...state};
        //
        // }
        default:
            return state;
    }
};

export const showMoreUsersCreator = () => ({type: SHOW_MORE_USERS});
export const followThisUserCreator = (id) => ({type: FOLLOW_USER, userID: id});
// export const ccc = () => ({type: action3});

export default usersReducer;