import React, { useState } from "react";

function UserProfile(props) {
    const [name, setName] = useState(props.name);
    const [profilePic, setImg] = useState(props.profilePic);

    function setNewProfilePicture() {
        setImg(prompt("Insira um link para a sua foto de perfil:"));
    }

    function setNewName() {
        setName(prompt("Qual seu nome?"));
    }

    return (
        <div className="usuario" data-test="user">
            <img src={profilePic} onClick={setNewProfilePicture} data-test="profile-image" />
            <div className="texto"> 
                <strong>{props.username}</strong>
                <span>
                    <div data-test="name">{name}</div>
                    <ion-icon name="pencil" onClick={setNewName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function SidebarUser() {

    const item = [
        {
            name: "Catana",
            username: "catanacomics",
            profilePic: "./assets/img/catanacomics.svg"
        }
    ]

    const mainUser = item.map((user) => (
        <UserProfile key={user.username} name={user.name} username={user.username} profilePic={user.profilePic} />
    ));

    return ([mainUser]);
}
