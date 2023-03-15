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
        <div className="usuario" >
            <img src={profilePic} onClick={setNewProfilePicture} alt="Foto de perfil" />
            <div className="texto">
                <strong>{props.username}</strong>
                <span>
                    <div >{name}</div>
                    <ion-icon name="pencil" onClick={setNewName} ></ion-icon>
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
