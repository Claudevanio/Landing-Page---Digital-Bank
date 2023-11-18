import "./styles.css"
import Mock from "@assets/mock.png"

export const Main = () => {
    return (
        <div className="main-container scrollable-container" id="main">
            <div className="main-titles">
                <p className="main-subtitle">Crie o seu próprio</p>
                <h1 className="main-title"> <span>Banco Digital</span> personalizado.</h1>
            </div>
            <img src={Mock}/>
            <p className="main-paragraph">Descubra a estrutura modular que permite a construção do seu banco personalizado com segurança, agilidade e eficiência.</p>
            <button className="main-button">Criar meu banco</button>
        </div>
    )
}
