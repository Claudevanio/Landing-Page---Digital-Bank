import "./styles.css"
import Macbook from "@assets/macbook.png"
import Layout from "@assets/dashboard_customize.png"
import Support from "@assets/support_agent.png"
import Currency from "@assets/currency_exchange.png"
import Funcionality from "@assets/browse.png"
import Integration from "@assets/integration_instructions.png"
import Domain from "@assets/domain_add.png"


export const Features = () => {
    return (
        <>
            <div className="features-container">
                <h2>Personalize</h2>
                <h1>Tudo!</h1>
                <div className="image-button">
                    <img src={Macbook} />
                    <button>Criar meu banco</button>
                </div>
                <div className="features">
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Layout} />
                        </div>
                        <div className="feature-details">
                            <h4>Layout Personalizado</h4>
                            <p>Destaque-se com uma identidade visual única e envolvente, adaptada à sua marca.</p>
                        </div>
                    </div>
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Support} />
                        </div>
                        <div className="feature-details">
                            <h4>Atendimento personalizado</h4>
                            <p>Crie relacionamentos mais profundos ao oferecer atendimento ao cliente excepcional, personalizado para atender às necessidades individuais.</p>
                        </div>
                    </div>
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Currency} />
                        </div>
                        <div className="feature-details">
                            <h4>Luco com novos serviços financeiros e não financeiros</h4>
                            <p>Destaque-se com uma identidade visual única e envolvente, adaptada à sua marca.</p>
                        </div>
                    </div>
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Funcionality} />
                        </div>
                        <div className="feature-details">
                            <h4>Funcionalidades adaptadas</h4>
                            <p>Adapte a plataforma às necessidades específicas do seu negócio, oferecendo funcionalidades personalizadas para atender aos requisitos dos clientes.</p>
                        </div>
                    </div>
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Integration} />
                        </div>
                        <div className="feature-details">
                            <h4>Integração com outros sistemas</h4>
                            <p>Maximize a eficiência operacional com integrações perfeitas para fluxos de trabalho harmoniosos.</p>
                        </div>
                    </div>
                    <div className="card-feature">
                        <div className="feature-icon-container">
                            <img src={Domain} />
                        </div>
                        <div className="feature-details">
                            <h4>Maior competitividade</h4>
                            <p>Destaque-se como líder no cenário financeiro digital, oferecendo uma plataforma altamente personalizada e integrada.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="features-container-desktop">
                <div className="feature-title">
                    <h1>Personalize <b>tudo!</b></h1>
                </div>
                <div className="content-feature">

                    <div className="right-feature">
                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Layout} />
                            </div>
                            <div className="feature-details">
                                <h4>Layout Personalizado</h4>
                                <p>Destaque-se com uma identidade visual única e envolvente, adaptada à sua marca.</p>
                            </div>
                        </div>
                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Support} />
                            </div>
                            <div className="feature-details">
                                <h4>Atendimento personalizado</h4>
                                <p>Crie relacionamentos mais profundos ao oferecer atendimento ao cliente excepcional, personalizado para atender às necessidades individuais.</p>
                            </div>
                        </div>
                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Currency} />
                            </div>
                            <div className="feature-details">
                                <h4>Luco com novos serviços financeiros e não financeiros</h4>
                                <p>Destaque-se com uma identidade visual única e envolvente, adaptada à sua marca.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-button">
                        <img src={Macbook} />
                        <button>Criar meu banco</button>
                    </div>
                    <div className="features">

                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Funcionality} />
                            </div>
                            <div className="feature-details">
                                <h4>Funcionalidades adaptadas</h4>
                                <p>Adapte a plataforma às necessidades específicas do seu negócio, oferecendo funcionalidades personalizadas para atender aos requisitos dos clientes.</p>
                            </div>
                        </div>
                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Integration} />
                            </div>
                            <div className="feature-details">
                                <h4>Integração com outros sistemas</h4>
                                <p>Maximize a eficiência operacional com integrações perfeitas para fluxos de trabalho harmoniosos.</p>
                            </div>
                        </div>
                        <div className="card-feature">
                            <div className="feature-icon-container">
                                <img src={Domain} />
                            </div>
                            <div className="feature-details">
                                <h4>Maior competitividade</h4>
                                <p>Destaque-se como líder no cenário financeiro digital, oferecendo uma plataforma altamente personalizada e integrada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
