import "./styles.css"
import Circle from "@assets/circle.png"
import MockCel from "@assets/mock-cel.png"
import IconPix from "@assets/ic_baseline-pix.png"
import MockCelDesktop from "@assets/mockCel.png"
import IconTed from "@assets/akar-icons_arrow-repeat.png"
import IconPayment from "@assets/icon-park_pay-code-two.png"
import IconCard from "@assets/light.png"
import IconBoleto from "@assets/tabler_file-invoice.png"


export const ClientExperience = () => {
  return (
    <>
      <div className="client-xp-container">
        <div className="header-client-xp">
          <img src={Circle} className="circle" />
          <div className="client-xp-title">
            <h1>Transforme<br />
              a <b>experiência </b>
              do seu cliente.</h1>
          </div>
        </div>
        <div className="content-client-xp">
          <p>Ofereça agilidade, segurança e uma plataforma adaptada às suas necessidades.</p>
          <img src={MockCel} className="mock-cel" />
          <div className="client-xp-cards">
            <img src={IconPix} />
            Pix</div>
          <div className="client-xp-cards">
            <img src={IconPayment} />
            Pagamento de Contas</div>
          <div className="client-xp-cards">
            <img src={IconTed} />
            TED</div>
          <div className="client-xp-cards">
            <img src={IconBoleto} />
            Boletos</div>
          <div className="client-xp-cards">
            <img src={IconCard} />
            Compras com o cartão</div>
          <div className="client-xp-cards">
            <img src={IconPayment} />
            QR CODE</div>
        </div>
      </div>


      <div className="client-xp-container-desktop">
        <div className="header-client-xp">
          <img src={MockCelDesktop} />
        </div>
        <div className="content-client-xp">
          <h1>Transforme
            a <b>experiência </b><br />
            do seu cliente.</h1>
          <p>
            Transforme a jornada do seu cliente, oferecendo agilidade, segurança <br/> e uma plataforma adaptada às suas necessidades.
          </p>
          <div className="cards-container">
            <div className="client-xp-cards">
              <img src={IconPix} />
              Pix</div>
            <div className="client-xp-cards">
              <img src={IconPayment} />
              Pagamento de Contas</div>
            <div className="client-xp-cards">
              <img src={IconTed} />
              TED</div>
            <div className="client-xp-cards">
              <img src={IconBoleto} />
              Boletos</div>
            <div className="client-xp-cards">
              <img src={IconCard} />
              Compras com o cartão</div>
            <div className="client-xp-cards">
              <img src={IconPayment} />
              QR CODE
            </div>
          </div>
          <button>Crie meu banco digital</button>
        </div>
      </div>
    </>
  )
}
