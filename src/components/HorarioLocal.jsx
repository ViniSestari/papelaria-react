import './HorarioLocal.css';

function HorarioLocal() {
    return (
      <>
      <div className="container my-4">
  <div className="row justify-content-center align-items-start">

    <div className="col-12 col-md-6 mb-4 mb-md-0">
      <div className="localizacao-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8752.780987667173!2d-47.30866819029201!3d-22.724855894842353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a14c8ed8dff%3A0x9e2ac28ea5db9d9b!2sPapelaria%20Mickey!5e0!3m2!1spt-BR!2sbr!4v1750116044408!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div className="col-12 col-md-6">
      <div className="card shadow-sm text-center horario-card mx-auto">
        <div className="card-body">
          <h2 className="card-title">🕒 Horário de Funcionamento</h2>
          <h4 className="card-text mb-1">Segunda a Sexta: <strong>08h30 às 18h</strong></h4>
          <h4 className="card-text mb-1">Sábado: <strong>08h30 às 13h</strong></h4>
          <h4 className="card-text text-danger">❌Domingo e Feriados: <strong>Fechado</strong></h4>
        </div>
      </div>
    </div>

  </div>
</div>

      </>
    );
}

export default HorarioLocal;