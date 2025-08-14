import './CardBlog.css';

function CardBlog() {
    return (
       <>
       <section className="container my-5">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100">
            <img src="img-blog1.webp" className="card-img-top img-fluid" alt="Volta às Aulas"/>
            <div className="card-body">
              <h5 className="card-title">Kit Volta às Aulas</h5>
              <p className="card-text">Dicas essenciais para montar um kit escolar prático e estiloso.</p>
              <a href="artigo.html?id=volta-aulas" className="btn btn-primary">Ler mais</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="img-blog2.jpg" className="card-img-top img-fluid" alt="Lançamentos"/>
            <div className="card-body">
              <h5 className="card-title">Lançamentos de Produtos</h5>
              <p className="card-text">Descubra as novidades que chegaram na Papelaria Mickey!</p>
              <a href="artigo.html?id=lancamentos" class="btn btn-primary">Ver novidades</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="img-blog3.jpg" className="card-img-top img-fluid" alt="Organização"/>
            <div className="card-body">
              <h5 className="card-title">Organização e Estudos</h5>
              <p className="card-text">Dicas para aproveitar melhor seu material nos estudos e no trabalho.</p>
              <a href="artigo.html?id=organizacao" className="btn btn-primary">Aprender mais</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="img-blog4.jpg" className="card-img-top" alt="Canetas"/>
            <div className="card-body">
              <h5 className="card-title">Como escolher a melhor caneta</h5>
              <p className="card-text">Veja qual tipo de caneta combina melhor com sua escrita e estilo.</p>
              <a href="artigo.html?id=canetas" className="btn btn-primary">Ver artigo</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="img-blog5.png" className="card-img-top" alt="Planner Decorado"/>
            <div className="card-body">
              <h5 className="card-title">Decore seu caderno ou planner</h5>
              <p className="card-text">Dicas criativas para deixar seu material com a sua cara!</p>
              <a href="artigo.html?id=decoracao" className="btn btn-primary">Ver ideias</a>
            </div>
          </div>
        </div>

      </div>
    </section>
       </>
    );
}

export default CardBlog;