import { Link } from 'react-router-dom';
import logo from './../../assets/ambulancia.jpg';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-menu">
                    <div className="navbar-item">
                    <Link to="/produtos">Produtos</Link></div>
                    
                    <div className="navbar-item">
                    <Link to="/categorias">Categorias</Link></div>
                </div>
                <div className="navbar-title-container">
                    
                    <img src={logo} alt="Logo" className="navbar-logo" /><Link to="/">
                    <div className="navbar-title">FarmaViva</div>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-item">
                    <Link to="/configuracoes">Configurações</Link></div>
                    <div className="navbar-item">
                    <Link to="/logout">Sair</Link></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;