import React from "react";
import Post from "./Post";

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