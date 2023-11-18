
import { Carousel } from "primereact/carousel"
import "./styles.css"
import LogoTokyo from "@assets/logomarca.png"
import Iphone from "@assets/iphone-15.png"

const casos = [{
    title: "string",
    logo: "string"
},
{
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
},
]

const CardCarousel = () => {
    return (
        <div id="cases">
            <div className="card-case-container" id="cases">
                <div className="case-title">
                    <img src={LogoTokyo} />
                    tokyo bank
                </div>
                <div className="img-case">
                    <img src={Iphone} />
                </div>
                <div className="details-case">
                    <h5>A Tokio bank é uma "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    <p> Diferenciais:</p>
                </div>
                <div className="diferenciais-case">
                    <div className="diferencial-card">
                        <div className="logo-diferencial">
                        </div>
                        <div className="divider-card">
                            <h3>Funcionalidade</h3>
                            <p>Tecnologia avançada com novidades de mercado sempre.</p>
                        </div>
                    </div>
                    <div className="diferencial-card">
                        <div className="logo-diferencial">
                        </div>
                        <div className="divider-card">
                            <h3>Funcionalidade</h3>
                            <p>Tecnologia avançada com novidades de mercado sempre.</p>
                        </div>
                    </div>
                    <div className="diferencial-card">
                        <div className="logo-diferencial">
                        </div>
                        <div className="divider-card">
                            <h3>Funcionalidade</h3>
                            <p>Tecnologia avançada com novidades de mercado sempre.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-case-container-desktop" id="cases">

                <div className="case-details">
                    <div className="case-title">
                        <img src={LogoTokyo} />
                        tokyo bank
                        <div className="details-case">
                            <h5>A Tokio bank é uma "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                            <p> Diferenciais:</p>
                        </div>
                        <div className="diferenciais-case">
                            <div className="diferencial-card">
                                <div className="logo-diferencial">
                                </div>
                                <div className="divider-card">
                                    <h3>Funcionalidade</h3>
                                    <p>Tecnologia avançada com novidades de mercado sempre.</p>
                                </div>
                            </div>
                            <div className="diferencial-card">
                                <div className="logo-diferencial">
                                </div>
                                <div className="divider-card">
                                    <h3>Funcionalidade</h3>
                                    <p>Tecnologia avançada com novidades de mercado sempre.</p>
                                </div>
                            </div>
                            <div className="diferencial-card">
                                <div className="logo-diferencial">
                                </div>
                                <div className="divider-card">
                                    <h3>Funcionalidade</h3>
                                    <p>Tecnologia avançada com novidades de mercado sempre.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="img-case">
                    <img src={Iphone} />
                </div>
            </div>
        </div>
    )
}

export const Cases = () => {
    return (
        <div className="cases-container">
            <h1>Conheça nossos <b>casos de sucesso!</b></h1>
            <Carousel value={casos} itemTemplate={CardCarousel} indicatorsContentClassName="indicator-carousel" />
        </div>
    )
}
