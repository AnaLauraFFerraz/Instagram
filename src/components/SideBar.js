import SideBarUser from "./SideBarUser";
import Suggestions from "./Suggestions";

export default function SideBar() {

    return (
        <div className="sidebar">

            <SideBarUser />

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Suggestions />
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}
