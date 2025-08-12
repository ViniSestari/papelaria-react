import './CardInicio.css';

function CardInicio()  {
    return (
        <>
        <div className="produtos-destaque">
    <div className="card p-4 shadow-lg">
      <h2 className="Titulo">Nossos queridinhos do momento</h2>

      <div className="row row-cols-1 row-cols-md-2 g-4">

       
        <div className="col">
          <div className="card">
            <img src="destaque1.webp" className="card-img-top img-fluid" alt="Produto 1"/>
            <div className="card-body">
              <h5 className="card-title">Caderno Bobbie Goods</h5>
              <p className="card-text">Caderno fofo com capa de urso 🐻.</p>
            </div>
          </div>
        </div>

       
        <div className="col">
          <div className="card ">
            <img src="destaque2.webp" className="card-img-top img-fluid" alt="Produto 2"/>
            <div className="card-body">
              <h5 className="card-title">Canetinhas coloridas Touch</h5>
              <p className="card-text">Destaque seus estudos com charme e elegância.</p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card ">
            <img src="destaque3.webp" className="card-img-top img-fluid" alt="Produto 3"/>
            <div className="card-body">
              <h5 className="card-title">Marca-texto Pastel</h5>
              <p className="card-text">Destaque seus estudos com charme e elegância.</p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card ">
            <img src="destaque4.webp" className="card-img-top img-fluid" alt="Produto 4"/>
            <div className="card-body">
              <h5 className="card-title">Planner Semanal</h5>
              <p className="card-text">Organize sua semana com estilo minimalista e funcional.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
        </>
    );
}   

export default CardInicio;
