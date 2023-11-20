import "./styles.css";
import Solution1 from "@assets/solution-1.png";
import Solution2 from "@assets/solution-2.png";
import Solution3 from "@assets/solution-3.png";
import Solution4 from "@assets/solution-4.png";
export const Solutions = () => {
  return (
    <div id="solutions">
      <div className="solutions-container scrollable-container">
        <h1>
          Soluções <b>completas</b>
        </h1>
        <div className="border-1">
          <div className="card-solution">
            <div className="img">
              <img src={Solution1} />
            </div>
            <div className="details">
              <h1>Modularidade Inovadora</h1>
              <p>
                Construa seu banco passo a passo, adaptando-se às demandas
                específicas do seu público. Uma estrutura flexível que reflete
                sua visão, de forma escalável e eficiente.
              </p>
            </div>
          </div>
        </div>
        <div className="border-2">
          <div className="card-solution">
            <div className="img">
              <img src={Solution2} />
            </div>
            <div className="details">
              <h1>Personalização Total</h1>
              <p>
                Oferecemos a liberdade para personalizar cada aspecto do banco,
                desde a interface do usuário até as funcionalidades específicas,
                para que você entregue uma experiência financeira única aos seus
                usuários.
              </p>
            </div>
          </div>
        </div>
        <div className="border-3">
          <div className="card-solution">
            <div className="img">
              <img src={Solution3} />
            </div>
            <div className="details">
              <h1>Segurança Financeira</h1>
              <p>
                Em um mundo digital, a confiança é seu ativo mais valioso.
                Comprometemo-nos com a segurança em todas as camadas, garantindo
                transações impenetráveis e a conformidade estrita com os mais
                altos padrões.
              </p>
            </div>
          </div>
        </div>
        <div className="border-4">
          <div className="card-solution">
            <div className="img">
              <img src={Solution4} />
            </div>
            <div className="details">
              <h1>Integrações</h1>
              <p>
                Além das funcionalidades essenciais de um banco digital,
                oferecemos integrações com serviços financeiros essenciais,
                facilitando a antecipação de recebíveis, transações PIX, emissão
                de boletos e muito mais.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="solutions-container-desktop scrollable-container">
        <div className="text1">
          <h1>
            Soluções <b>completas</b>
          </h1>
        </div>
        <div className="cards">
          <div className="border-1">
            <div className="card-solution">
              <div className="details">
                <h1>Modularidade Inovadora</h1>
                <p>
                  Construa seu banco passo a passo, adaptando-se às demandas
                  específicas do seu público. Uma estrutura flexível que reflete
                  sua visão, de forma escalável e eficiente.
                </p>
              </div>
              <div className="img">
                <img src={Solution1} />
              </div>
            </div>
          </div>
          <div className="border-2">
            <div className="card-solution">
              <div className="img">
                <img src={Solution2} />
              </div>
              <div className="details">
                <h1>Personalização Total</h1>
                <p>
                  Oferecemos a liberdade para personalizar cada aspecto do
                  banco, desde a interface do usuário até as funcionalidades
                  específicas, para que você entregue uma experiência financeira
                  única aos seus usuários.
                </p>
              </div>
            </div>
          </div>
          <div className="border-3">
            <div className="card-solution">
              <div className="details">
                <h1>Segurança Financeira</h1>
                <p>
                  Em um mundo digital, a confiança é seu ativo mais valioso.
                  Comprometemo-nos com a segurança em todas as camadas,
                  garantindo transações impenetráveis e a conformidade estrita
                  com os mais altos padrões.
                </p>
              </div>

              <div className="img">
                <img src={Solution3} />
              </div>
            </div>
          </div>
          <div className="border-4">
            <div className="card-solution">
          
              <div className="details">
                <h1>Integrações</h1>
                <p>
                  Além das funcionalidades essenciais de um banco digital,
                  oferecemos integrações com serviços financeiros essenciais,
                  facilitando a antecipação de recebíveis, transações PIX,
                  emissão de boletos e muito mais.
                </p>
              </div>
              <div className="img">
                <img src={Solution4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
