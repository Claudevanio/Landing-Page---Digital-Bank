import "./styles.css"
import Fidelization from "@assets/diversity_1.png"
import Inovation from "@assets/emoji_objects.png"
import Valuation from "@assets/favorite.png"
import Valorization from "@assets/loyalty.png"
import Investments from "@assets/currency_exchange.png"

export const NextStep = () => {
    return (
        <div className="next-step-container">
            <div className="header-next-step">
                <div className="next-step-title">
                    <h1>Dê o próximo grande passo para a sua empresa!</h1>
                    <button className="button-desktop">Criar um banco digital</button>
                </div>
            </div>
            <div className="border-next-step">
                <div className="box-next-step">
                    <div className="content-next-step">
                        <div className="card-next-step">
                            <div className="next-step-icon-container">
                                <img src={Fidelization} />
                            </div>
                            <div className="next-step-details">
                                <h4>Fidelização</h4>
                                <p>Fidelize sua carteira de clientes, funcionários e ofereça a solução necessária para o público que quiser.</p>
                            </div>
                        </div>
                        <div className="card-next-step">
                            <div className="next-step-icon-container">
                                <img src={Inovation} />
                            </div>
                            <div className="next-step-details">
                                <h4>Inovação</h4>
                                <p>Mantenha-se à frente das tendências do mercado com uma plataforma que permite atualizações contínuas, integrações avançadas e personalização ilimitada.</p>
                            </div>
                        </div>
                        <div className="card-next-step">
                            <div className="next-step-icon-container">
                                <img src={Valuation} />
                            </div>
                            <div className="next-step-details">
                                <h4>Valuation</h4>
                                <p>Otimize operações e fortaleça os fundamentos financeiros, refletindo positivamente na avaliação da sua empresa pelos investidores.</p>
                            </div>
                        </div>
                        <div className="card-next-step">
                            <div className="next-step-icon-container">
                                <img src={Valorization} />
                            </div>
                            <div className="next-step-details">
                                <h4>Valorização da marca</h4>
                                <p>Destaque-se como um líder de excelência ao oferecer uma experiência financeira única e personalizada, elevando a percepção positiva e a atratividade para clientes e parceiros.</p>
                            </div>
                        </div>
                        <div className="card-next-step">
                            <div className="next-step-icon-container">
                                <img src={Investments} />
                            </div>
                            <div className="next-step-details">
                                <h4>Investimento</h4>
                                <p>A Construção Modular de Bancos Digitais não é apenas uma ferramenta, mas um investimento estratégico, garantindo eficiência operacional, crescimento a longo prazo e um retorno robusto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="button-mobile">Fale Conosco</button>

        </div>
    )
}
