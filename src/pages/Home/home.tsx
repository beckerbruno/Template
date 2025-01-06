import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Button } from "../../components/ui/button";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <h1 className="title">Bem-vindo ao Meu Site</h1>
        <p className="subtitle">Este é um template de página que você pode usar como ponto de partida para o seu projeto.</p>
        <Button>Saiba Mais</Button>
      </main>
      <Footer />
    </div>
  )
}

