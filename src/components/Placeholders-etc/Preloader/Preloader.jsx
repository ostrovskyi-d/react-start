import React from "react";

const Preloader = (props) => {
    return (
        <div style={ {
            // border: "10px solid black"
            display: "flex",
            justifyContent: "center",
            height: "520px",
            alignItems: "center",
            backgroundColor: "#f9f9f9"
        } }>
            <img
                style={{
                    maxHeight: "150px",
                }}
                src="https://icon-library.net/images/spinner-icon-gif/spinner-icon-gif-10.jpg"
                alt="preloader"
            />
        </div>
    )
};


export default Preloader;