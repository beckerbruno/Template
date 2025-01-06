import { Link } from 'react-router-dom';
import { Button } from '../ui/button'
import './header.css';

export default function Header() {
  return (
    <header className="header_container">
      <div className="header_content">
        <Link to="/" className="link">Meu Site</Link>
        <nav>
          <ul className="buttons_list">
            <li><Link to="/" className="header_button">Início</Link></li>
            <li><Link to="/sobre" className="header_button">Sobre</Link></li>
            <li><Link to="/contato" className="header_button">Contato</Link></li>
          </ul>
        </nav>
        <Button variant="secondary">Login</Button>
      </div>
    </header>
  )
}

