import './CardContato.css';

function CardContato() {
    return (
        <>
        <main className="container my-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <div className="card card-contato shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Fale Conosco</h2>
          <p className="text-center mb-4">
            Tem alguma dúvida ou ficou interessado por algo? Entre em contato conosco pelas redes sociais ou envie sua mensagem pelo formulário abaixo!
          </p>

          <form action="https://formspree.io/f/xzzvawve" method="POST">
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="seu@email.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar</button>
          </form>

          <hr />

          <div className="text-center">
            <p className="mb-2">Ou fale direto pelas redes sociais:</p>
            <a href="https://www.instagram.com/mickeypapelaria/" target="_blank" rel="noreferrer" className="btn btn-outline-danger me-2">
              <img src="insta.jpg" className="icon" alt="Instagram" style={{ height: '24px' }} /> Instagram
            </a>
            <a href="https://wa.me/5519989075919" target="_blank" rel="noreferrer" className="btn btn-outline-success">
              <img src="whats.png" className="icon" alt="WhatsApp" style={{ height: '24px' }} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

        </>
    );
}

export default CardContato;
