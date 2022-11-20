import React from "react";

import manIcon from "../assets/images/man.png";
import womanIcon from "../assets/images/woman.png";
import anonymousIcon from "../assets/images/anonymous.png";
import maleIcon from "../assets/images/male.png";
import femaleIcon from "../assets/images/female.png";
import undefinedIcon from "../assets/images/undefined.png";

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