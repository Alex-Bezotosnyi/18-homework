import React, {useState} from "react";
import contacts from "../data/data";
import {checkAvatar, checkGender} from "../functions/functions";

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="wrapper">
            <div className="wrapper__input_search">
                <input type="text" placeholder="Пошук контактів..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}/>
            </div>
            <div className="wrapper__contact_list">
                {contacts.filter((value) => {
                    if (searchTerm === "") {
                        return value;
                    } else if ((
                        value.lastName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) || (value.firstName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()))) {
                        return value;
                    }
                }).map((value, key) => {
                    return (
                        <div className="wrapper__contact_list_item">
                            <div className="wrapper__contact_list_up">
                                <div key={key.gender} className="wrapper__contact_list_picture">
                                    {checkAvatar(value.gender)}
                                </div>
                                <div className="wrapper__contact_list_search">
                                    <div key={key.gender}>
                                        {checkGender(value.gender)}
                                    </div>
                                </div>
                            </div>
                            <div key={key.firstName}>{value.firstName}</div>
                            <div key={key.lastName}>{value.lastName}</div>
                            <div className="wrapper__contact_list_phone" key={key.phone}>{value.phone}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default SearchFilter;