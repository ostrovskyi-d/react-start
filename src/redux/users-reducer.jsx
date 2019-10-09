const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

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
        },
        {
            id: 4,
            nickName: "NickName3",
            status: "away from mouse",
            location: {
                country: "Belarus",
                city: "Minsk"
            },
            followed: false,
        },
        {
            id: 5,
            nickName: "Anastasia",
            status: "away from hell",
            location: {
                country: "Arstotzka",
                city: "Greshtyn"
            },
            followed: true,
        },
        {
            id: 6,
            nickName: "Azaza",
            location: {
                country: "Turkey",
                city: "Stambul"
            },
            status: "away from heaven",
            followed: false
        }
    ]
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            console.log("SHOW MORE USERS");
            return {...state};
        }
        case FOLLOW: {
            // створити ефективний спосіб для переключання стану підписки на користувача
            // а створив неефективний

            return {
                ...state,
                usersStore: state.usersStore.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersStore: state.usersStore.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersStore: [...state.usersStore, action.usersStore]
            }
        }

        default:
            return state;
    }
};

export const showMoreUsersAC = () => ({type: SHOW_MORE_USERS});
export const followThisUserAC = (userID) => ({type: FOLLOW, userID});
export const unfollowThisUserAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (usersStore) => ({type: SET_USERS, usersStore});
export default usersReducer;