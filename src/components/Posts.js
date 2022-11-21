import React, { useState } from "react";


function Post(props) {

    let likesBalance = props.likesNumber;

    const [likeName, setLikeName] = useState("heart-outline");
    const [likeClass, setLikeClass] = useState("");
    const [isLikeActive, setLikeActive] = useState(false);
    const [contLikes, setContLikes] = useState(likesBalance)

    const [saveName, setSaveName] = useState("bookmark-outline");
    const [saveClass, setSaveClass] = useState("");
    const [isSaveActive, setSaveActive] = useState(false);

    function SetLiked() {
        setLikeName("heart");
        setLikeClass("liked-icon");
        setLikeActive(true);
        setContLikes(likesBalance + 1);
    }

    function SetDisliked() {
        setLikeName("heart-outline");
        setLikeClass("");
        setLikeActive(!isLikeActive);
        setContLikes(likesBalance);
    }

    function DoubleClickHandle() {
        if (!isLikeActive)
            SetLiked();
    }

    function ToggleSaveIcon() {
        if (isSaveActive) {
            setSaveName("bookmark-outline");
            setSaveClass("");
            setSaveActive(!isSaveActive);
        } else {
            setSaveName("bookmark");
            setSaveClass("saved-icon");
            setSaveActive(!isSaveActive);
        }
    };

    return (
        <div className="post" data-test="post">
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
                <img src={props.postContent} data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            data-test="like-post"
                            name={likeName}
                            class={likeClass}
                            onClick={isLikeActive ? SetDisliked : SetLiked}
                        ></ion-icon>
                        {console.log(likeClass)}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            data-test="save-post"
                            name={saveName}
                            className={saveClass}
                            onClick={ToggleSaveIcon}
                        ></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.userPicLiked} alt="post" />
                    <div className="texto" data-test="likes-number">
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
