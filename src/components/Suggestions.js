
function SuggestedProfile(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.profilePic} alt="Perfil sugerido" />
        <div className="texto">
          <div className="nome">{props.user}</div>
          <div className="razao">{props.description}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default function Suggestions() {
  const items = [
    {
      user: "bad.vibes.memes",
      profilePic: "./assets/img/bad.vibes.memes.svg",
      description: "Segue você"
    },
    {
      user: "chilibirdart",
      profilePic: "./assets/img/chibirdart.svg",
      description: "Segue você"
    },
    {
      user: "razoesparaacreditar",
      profilePic: "./assets/img/razoesparaacreditar.svg",
      description: "Novo no Instagram"
    },
    {
      user: "adorable_animals",
      profilePic: "./assets/img/adorable_animals.svg",
      description: "Segue você"
    },
    {
      user: "bsmallcutecats",
      profilePic: "./assets/img/smallcutecats.svg",
      description: "Novo no Instagram"
    }
  ];

  const sugestoes = items.map((item) => (
    <SuggestedProfile key={item.user} user={item.user} profilePic={item.profilePic} description={item.description} />
  ));

  return ([sugestoes]);
}
