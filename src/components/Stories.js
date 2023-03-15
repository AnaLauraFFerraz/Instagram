import Story from "./Story";

export default function Stories() {
    const items = [
        {
            user: "9gag",
            profilePic: "./assets/img/9gag.svg",
        },
        {
            user: "meowded",
            profilePic: "./assets/img/meowed.svg",
        },
        {
            user: "barked",
            profilePic: "./assets/img/barked.svg",
        },
        {
            user: "nathanwpylestrangeplanet",
            profilePic: "./assets/img/nathanwpylestrangeplanet.svg",
        },
        {
            user: "wawawicomics",
            profilePic: "./assets/img/wawawicomics.svg",
        },
        {
            user: "respondeai",
            profilePic: "./assets/img/respondeai.svg",
        },
        {
            user: "filomoderna",
            profilePic: "./assets/img/filomoderna.svg",
        },
        {
            user: "memeriagourmet",
            profilePic: "./assets/img/memeriagourmet.svg",
        }
    ];

    return (
        <div className="stories">
            {items.map((item) => (
                <Story key={item.profilePic} user={item.user} profilePic={item.profilePic} />
            ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
