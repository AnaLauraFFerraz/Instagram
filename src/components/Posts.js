import React, { useState } from "react";


function Post(props) {

    const [likeIconName, setIconName] = useState("heart-outline");
    const [likeIconClass, setIconClass] = useState("not-liked-icon");
    const [isLikeActive, setIconActive] = useState(false);

    const [saveIconSaveName, setSaveIconName] = useState("bookmark-outline");
    const [saveIconClass, setSaveIconClass] = useState("not-liked-icon");
    const [isSaveActive, setSaveIconActive] = useState(false);

    let likesBalance = 0;
    let contLikes = 0;

    //Inserir contador de likes
    //let numberOfLikes = props.likesNumber;
    function ToggleLikeIcon() {
        if (!isLikeActive) {
            setIconName("heart");
            setIconClass("liked-icon");
            setIconActive(!isLikeActive);
            contLikes++;
            likesBalance = props.likesNumber + contLikes;
        } else {
            setSaveIconName("heart-outline");
            setSaveIconClass("not-liked-icon");
            setIconActive(!isLikeActive);
            contLikes -= 1;
            likesBalance = props.likesNumber + contLikes;
        }
    };

    //Inserir restrição de dislike onDoubleClick

    function ToggleSaveIcon() {
        if (!isSaveActive) {
            setIconName("bookmark");
            setIconClass("liked-icon");
            setIconActive(!isSaveActive);
        } else {
            setIconName("bookmark-outline");
            setIconClass("not-liked-icon");
            setSaveIconActive(!isSaveActive);
        }
    };

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userPic} />
                    {props.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onDoubleClick={ToggleLikeIcon}>
                <img src={props.postContent} alt="post" />
            </div>

            <div className="fundo">
                <div className="container-acoes">
                    <div className="acoes">
                        <button onClick={ToggleLikeIcon}>
                            <ion-icon name={likeIconName} className={likeIconClass}></ion-icon>
                        </button>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            name={saveIconSaveName}
                            className={saveIconClass}
                            onClick={ToggleSaveIcon}
                        ></ion-icon>
                    </div>
                </div>
            </div>
            <div className="curtidas">
                <img src={props.userPicLiked} alt="post" />
                <div className="texto">
                    Curtido por <strong>{props.likedBy}</strong> e <strong>outras {likesBalance} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {

    const items = [
        {
            user: "meowed",
            userPic: "./assets/img/meowed.svg",
            postContent: "./assets/img/gato-telefone.svg",
            userPicLiked: "./assets/img/respondeai.svg",
            likedBy: "respondeai",
            likesNumber: "101.523"
        },
        {
            user: "barked",
            userPic: "./assets/img/barked.svg",
            postContent: "./assets/img/dog.svg",
            userPicLiked: "./assets/img/adorable_animals.svg",
            likedBy: "adorable_animals",
            likesNumber: "99.159"
        }
    ];

    const posts = items.map((item) => (
        <Post key={item.postContent} user={item.user} userPic={item.userPic} postContent={item.postContent} userPicLiked={item.userPicLiked} likedBy={item.likedBy} likesNumber={item.likesNumber} />
    ));

    return (
        <div className="posts">
            {posts}
        </div>
    );
}
