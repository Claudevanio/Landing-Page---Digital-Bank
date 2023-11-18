import Circle from "@assets/circle.svg"
import Woman from "@assets/woman-incomings.png"
import Savings from "@assets/savings.png"
import Bank from "@assets/account_balance.png"
import AddCard from "@assets/add_card.png"
import HeartCard from "@assets/credit_card_heart.png"

import "./styles.css"
export const Incomings = () => {
    return (
        <div className="incomings-container" id="benefits">
            <h4>Tenha diversas</h4>
            <div className="title-incomings">
                <h1>Fontes de receitas</h1>
                <img src={Circle} />
            </div>
            <p>Explore uma ampla gama de oportunidades financeiras e não financeiras para otimizar seu banco. Desde seguros, crédito e cashback até telemedicina e uma variedade de produtos, nossa plataforma oferece uma lucratividade diversificada que impulsiona o crescimento do seu negócio financeiro.</p>
            <img src={Woman} className="woman"/>
            <div className="icons-container">
                <div className="incomings-icons">
                    <img src={Savings} />
                    Gere receita com empréstimo</div>
                <div className="incomings-icons">
                    <img src={HeartCard} />
                    Aprove e reprove contas</div>
                <div className="incomings-icons">
                    <img src={AddCard} />
                    Telemedicina</div>
                <div className="incomings-icons">
                    <img src={Bank} />
                    Gerencie contas</div>
                <div className="incomings-icons">
                    <img src={AddCard} />
                    Ofereça crédito</div>
                <div className="incomings-icons">
                    <img src={AddCard} />
                    Telemedicina</div>
            <button>Fale conosco</button>
            </div>

        </div>
    )
}
