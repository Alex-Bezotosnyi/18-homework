import contacts from "./data";
import manIcon from "../images/man.png";
import womanIcon from "../images/woman.png";
import anonymousIcon from "../images/anonymous.png";
import maleIcon from "../images/male.png";
import femaleIcon from "../images/female.png";
import undefinedIcon from "../images/undefined.png";
import React from "react";

function checkAvatar(gender) {
    switch (gender) {
        case "male":
            return <img src={manIcon}/>;
        case "female":
            return <img src={womanIcon}/>;
        default:
            return <img src={anonymousIcon}/>;
    }
}

function checkGender(gender) {
    switch (gender) {
        case "male":
            return <img src={maleIcon}/>;
        case "female":
            return <img src={femaleIcon}/>;
        default:
            return <img src={undefinedIcon}/>;
    }
}

export {
    checkAvatar,
    checkGender,
}