// src/pages/Artigo.jsx
import { Link, useLocation } from "react-router-dom";
import artigos from "../data/artigos";
import "../components/Artigo.css";

function Artigo() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const artigo = artigos[id];

  if (!artigo) {
    return (
      <section className="container my-5 blog-article">
        <Link to="/blog" className="btn btn-danger mb-4">
          &larr; Voltar para o Blog
        </Link>
        <p>Artigo não encontrado.</p>
      </section>
    );
  }

  return (
    <>
    <section className="container my-5 blog-article">
      <Link to="/blog" className="btn btn-danger mb-4">
        &larr; Voltar para o Blog
      </Link>
      <h1>{artigo.titulo}</h1>
      <p className="text-muted">{artigo.data}</p>
      <img src={artigo.imagem} alt={artigo.titulo} className="img-fluid mb-4" />
      <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
    </section>
    </>
  );
}

export default Artigo;
