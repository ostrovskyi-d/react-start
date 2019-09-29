import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App.jsx"

let postsData = [
    {
        userID: 1,
        postMessage: "Some information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!",
        likes: 12
    },
    {
        userID: 2,
        postMessage: "Information about this post for content undertandable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nisi ab laboriosam ad? Sapiente animi numquam, corporis molestiae consequuntur, sunt esse id, inventore perspiciatis minima provident accusantium incidunt enim quaerat!",
        likes: 200
    },
    {
        userID: 3,
        postMessage: "kuku",
        likes: 213
    },
    {
        userID: 4,
        postMessage: "Lol, rofl, chillout, nice flex",
        likes: 100500
    }
];
let messageData = [
    { time: `12:50`, id: 1, text: "Hi" },
    { time: `12:50`, id: 2, text: "Hiiii" },
    { time: `12:50`, id: 3, text: "How are you?" },
    { time: `12:50`, id: 4, text: "London" },
    { time: `12:50`, id: 5, text: "Why London?" },
    { time: `12:50`, id: 6, text: "Profit!!!" }
];
let contactsData = [
    { id: 1, name: "Vasyl" },
    { id: 2, name: "Vitalya" },
    { id: 3, name: "Eney" },
    { id: 4, name: "Jason Born" },
    { id: 5, name: "Morpheus" },
    { id: 6, name: "Hulk" },
    { id: 7, name: "Tony Stark" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" },
    { id: 6, name: "Tony Montana" }
];


ReactDOM.render(<App

    contactsData={contactsData}
    messageData={messageData}
    postsData={postsData}

/>, document.getElementById("root"));