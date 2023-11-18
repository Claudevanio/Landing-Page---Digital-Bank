
import PixQR from "@assets/pix-qr.png"
import "./styles.css"
export const PixAndQR = () => {
  return (
    <>
      <div className='pix-qr-container'>
        <h1><b>API</b> PIX e QRCODE! </h1>
        <img src={PixQR} />
        <div className="pix-qr-description">
          <p>Ao adotar a API PIX, sua plataforma financeira ganha velocidade, agilidade e conformidade com os padrões mais avançados do mercado, redefinindo a forma como as transações são realizadas.</p>
        </div>
        <div className="advantages-tags">
          <span className="tag">Pagamentos Instantâneos</span>
          <span className="tag">Eficiência Operacional</span>
          <span className="tag">Segurança Avançada</span>
          <span className="tag">Integração Simples</span>
          <span className="tag">Atendimento às Demandas do Mercado</span>
          <span className="tag">Ampla Adoção</span>
          <span className="tag">Diversidade de Serviços</span>
          <span className="tag">Inovação Financeira</span>
          <span className="tag">Conformidade com Padrões</span>
        </div>
        <button>Criar meu banco</button>
      </div>
      <div className='pix-qr-container-desktop'>
        <div className="img-container-pix">
          <img src={PixQR} />
        </div>
        <div className="pix-qr-description">
          <h1><b>API</b> PIX e QRCODE! </h1>
          <p>Ao adotar a API PIX, sua plataforma financeira ganha velocidade, agilidade e conformidade com os padrões mais avançados do mercado, redefinindo a forma como as transações são realizadas.</p>

          <div className="advantages-tags">
            <span className="tag">Pagamentos Instantâneos</span>
            <span className="tag">Eficiência Operacional</span>
            <span className="tag">Segurança Avançada</span>
            <span className="tag">Integração Simples</span>
            <span className="tag">Atendimento às Demandas do Mercado</span>
            <span className="tag">Ampla Adoção</span>
            <span className="tag">Diversidade de Serviços</span>
            <span className="tag">Inovação Financeira</span>
            <span className="tag">Conformidade com Padrões</span>
          </div>
        </div>
      </div>
    </>
  )
}
