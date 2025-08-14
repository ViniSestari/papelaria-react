

document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");

      const artigo = artigos[id];

      if (artigo) {
        document.getElementById("titulo").textContent = artigo.titulo;
        document.getElementById("data").textContent = artigo.data;
        document.getElementById("imagem").src = artigo.imagem;
        document.getElementById("imagem").alt = artigo.titulo;
        document.getElementById("conteudo").innerHTML = artigo.conteudo;
      } else {
        document.getElementById("conteudo").innerHTML = "<p>Artigo não encontrado.</p>";
      }
    });

function Artigo() {
  
  return (
    <>
    <section className="container my-5 blog-article">
    <a href="/blog" className="btn btn-danger mb-4">&larr; Voltar para o Blog</a>
    <h1 id="titulo"></h1>
    <p className="text-muted" id="data"></p>
    <img id="imagem" src="" alt="Imagem do artigo" />
    <div id="conteudo"></div>
  </section>
    </>
  );
}


export default Artigo;
