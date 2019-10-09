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
            },
            followed: false,
            buttonValue: ""
        },
        {
            id: 2,
            nickName: "NickName2",
            status: "away from brain",
            location: {
                country: "Russia",
                city: "Moscow"
            },
            followed: true,
            buttonValue: ""
        },
        {
            id: 3,
            nickName: "NickName3",
            status: "away from mouse",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            followed: false,
            buttonValue: ""
        },
    ],
    selectedUser: null,
    subscribed: [],
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            console.log("SHOW MORE USERS");
            return {...state};
        }
        case FOLLOW_USER: {
            // створити ефективний спосіб для переключання стану підписки на користувача


        }
        default:
            return state;
    }
};

export const showMoreUsersCreator = () => ({type: SHOW_MORE_USERS});
export const followThisUserCreator = (props, buttonValue) => ({type: FOLLOW_USER, props: props, buttonValue: buttonValue});

export default usersReducer;