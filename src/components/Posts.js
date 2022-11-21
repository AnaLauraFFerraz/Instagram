import React, { useState } from "react";


function Post(props) {

    const [likeIconName, setLikeIconName] = useState("heart-outline");
    const [likeIconClass, setLikeIconClass] = useState("");
    const [isLikeActive, setLikeIconActive] = useState(false);
    const [contLikes, setContLikes] = useState(0)

    const [saveIconName, setSaveIconName] = useState("bookmark-outline");
    const [saveIconClass, setSaveIconClass] = useState("");
    const [isSaveActive, setSaveIconActive] = useState(false);

    let likesBalance = props.likesNumber

    function DoubleClickHandle() {
        if (!isLikeActive)
            ToggleLikeIcon();
    }

    function ToggleLikeIcon() {
        if (isLikeActive) {
            setLikeIconName("heart-outline");
            setLikeIconClass("");
            setLikeIconActive(!isLikeActive);
            setContLikes(likesBalance);
        } else {
            setLikeIconName("heart");
            setLikeIconClass("liked-icon");
            setLikeIconActive(!isLikeActive);
            setContLikes(likesBalance + 1);
        }
    };

    function ToggleSaveIcon() {
        if (isSaveActive) {
            setSaveIconName("bookmark-outline");
            setSaveIconClass("");
            setSaveIconActive(!isSaveActive);
        } else {
            setSaveIconName("bookmark");
            setSaveIconClass("saved-icon");
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

            <div className="conteudo" onDoubleClick={DoubleClickHandle}>
                <img src={props.postContent} alt="post" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            name={likeIconName}
                            className={likeIconClass}
                            onClick={ToggleLikeIcon}
                        ></ion-icon>
                        {console.log(likeIconClass)}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            name={saveIconName}
                            className={saveIconClass}
                            onClick={ToggleSaveIcon}
                        ></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.userPicLiked} alt="post" />
                    <div className="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {contLikes.toString()} pessoas</strong>
                    </div>
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
            likesNumber: 101523
        },
        {
            user: "barked",
            userPic: "./assets/img/barked.svg",
            postContent: "./assets/img/dog.svg",
            userPicLiked: "./assets/img/adorable_animals.svg",
            likedBy: "adorable_animals",
            likesNumber: 99159
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
