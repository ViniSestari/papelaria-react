import './CardServico.css';

function CardServico() {
    return (
         <section className="container my-5">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card">
            <img src="serviço1.png" className="card-img-servico img-fluid" alt="Servico 1"/>
            <div className="card-body">
              <h5 className="card-title">Xerox e Impressão</h5>
              <p className="card-text">Impressão colorida e preto & branco, digitalização e cópias rápidas.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="serviço2.png" className="card-img-servico img-fluid" alt="Servico 2"/>
            <div className="card-body">
              <h5 className="card-title">Encadernação</h5>
              <p className="card-text">Encadernação de trabalhos e apostilas.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="serviço3.png" className="card-img-servico img-fluid" alt="Servico 3"/>
            <div className="card-body">
              <h5 className="card-title">Plastificação</h5>
              <p className="card-text">Proteja seus documentos com plastificação de alta qualidade.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="serviço4.webp" className="card-img-servico img-fluid" alt="Servico 4"/>
            <div className="card-body">
              <h5 className="card-title">Vendas de Materiais</h5>
              <p className="card-text">Venda de materiais escolares, escritório e papelaria em geral.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img src="serviço5.png" className="card-img-servico img-fluid" alt="Servico 5"/>
            <div className="card-body">
              <h5 className="card-title">Separação de Pedidos</h5>
              <p className="card-text">Organização e separação de pedidos para retirada ou entrega.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}

export default CardServico;
