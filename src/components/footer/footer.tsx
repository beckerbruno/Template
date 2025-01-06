import "./footer.css";

export default function Footer() {
	return (
	  <footer className="footer_container">
		<div className="footer_content">
		  <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
		</div>
	  </footer>
	)
  }
  
  