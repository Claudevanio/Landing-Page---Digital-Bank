import ContactImg from "@assets/contact.svg"
import "./styles.css"
export const Contact = () => {
    return (
        <div id="contacts">
            <div className="contact-container">
                <img src={ContactImg} />
                <h1>Vamos conversar?</h1>
                <div className="inputs-contact">
                    <div className="input-container">
                        <p>Nome</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Email</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Telefone</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Cargo</p>
                        <input />
                    </div>
                    <button>Fale conosco</button>
                </div>
            </div>
            <div className="contact-container-desktop">
                <div className="inputs-contact">
                    <h1>Vamos conversar?</h1>
                    <div className="input-container">
                        <p>Nome</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Email</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Telefone</p>
                        <input />
                    </div>
                    <div className="input-container">
                        <p>Cargo</p>
                        <input />
                    </div>
                    <button className="contact">Criar um banco digital</button>
                </div>
                <div className="img">
                    <img src={ContactImg} />
                </div>
            </div>
        </div>

    )
}
