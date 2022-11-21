import React, { useState } from "react";

function UserProfile(props) {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState(props.profilePic);

    function setNewProfilePicture() {
        setImagem(prompt("Insira um link para a sua foto de perfil:"));
    }

    function setNewName() {
        setNome(prompt("Qual seu nome?"));
    }

    return (
        <div className="usuario">
            <img src={props.profilePic} onClick={setNewProfilePicture} />
            <div className="texto">
                <strong>{props.name}</strong>
                <span>
                    {props.username}
                    <ion-icon name="pencil" onClick={setNewName}></ion-icon>
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
