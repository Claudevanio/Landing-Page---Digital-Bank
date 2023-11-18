import "./styles.css";
import Logo from "@assets/header-icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div-right-input-footer">
        <img src={Logo} className="logo" />
      </div>
      <div className="footer-list">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Soluções</a></li>
          <li><a href="#">Casos de uso</a></li>
          <li><a href="#">Beneficios</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div className="footer-adress">
        <p className="contact-email">contato@crieseubanco.com.br</p>
        <p className="dev">Developer by Astriu studio</p>
      </div>
    </div>
  );
};