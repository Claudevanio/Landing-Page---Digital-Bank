import "./styles.css"
import menu from "@assets/menu.png"
import Logo from "@assets/header-icon.png"
import { Link } from 'react-scroll';


export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-menu">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img className="header-container-hamburguer" src={menu} alt="menu" />
        </label>
        <ul>
          <li><Link to="main" smooth={true} duration={500}>Inicio</Link></li>
          <li><Link to="solutions" smooth={true} duration={500}>Soluções</Link></li>
          <li><Link to="cases" smooth={true} duration={500}>Casos de uso</Link></li>
          <li><Link to="benefits" smooth={true} duration={500}>Beneficios</Link></li>
          <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
          <li><Link to="contacts" smooth={true} duration={500}>Contatos</Link></li>
        </ul>
      </div>
      <div className="div-right-input">
        <img src={Logo} className="logo" />
      </div>
      <div className="header-container-nav">
        <div className="text-wrapper"><Link to="main" smooth={true} duration={500}>Inicio</Link></div>
        <div className="text-wrapper"><Link to="solutions" smooth={true} duration={500}>Soluções</Link></div>
        <div className="text-wrapper"><Link to="cases" smooth={true} duration={500}>Casos de uso</Link></div>
        <div className="text-wrapper"><Link to="benefits" smooth={true} duration={500}>Beneficios</Link></div>
        <div className="text-wrapper"><Link to="blog" smooth={true} duration={500}>Blog</Link></div>
        <div className="text-wrapper"><Link to="contacts" smooth={true} duration={500}>Contatos</Link></div>
      </div>
      <div className="button-header-container">
        <button className="button">Fale Conosco</button>
      </div>
    </div>
  )
}