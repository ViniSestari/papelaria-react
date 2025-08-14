import HorarioLocal from '../components/HorarioLocal';
import './../components/Sobre.css';

function Sobre() {
    return (
        <>
        <div className="container my-4">
  <div className="row align-items-center">
    <div className="col-md-6 mb-3 mb-md-0">
      <img src="fachada.jpg" className="img-fluid rounded img-sobre" alt="Fachada Papelaria Mickey" />
    </div>
    <div className="col-md-6">
      <h3 className="texto">
        📒 A <strong style={{ color: 'red' }}>Papelaria Mickey</strong> é uma loja tradicional que faz parte da vida da nossa comunidade há muitos anos. Em 2016, a papelaria ganhou novos donos, que assumiram o compromisso de manter o carinho, o bom atendimento e a qualidade que sempre marcaram a história da loja.
      </h3>
    </div>
  </div>
</div>

<div className="container my-4">
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-6 mb-3 mb-md-0">
      <img src="foto1.webp" className="img-fluid rounded img-sobre" alt="Foto 1" />
    </div>
    <div className="col-md-6">
      <h3 className="texto">
        ✏️ Aqui, você encontra tudo o que precisa para a escola, escritório, artesanato e papelaria em geral. Trabalhamos com materiais de qualidade, das marcas mais reconhecidas, e estamos sempre atentos às tendências para oferecer aos nossos clientes o que há de melhor e mais atual.
      </h3>
    </div>
  </div>
</div>

<div className="container my-4">
  <div className="row align-items-center">
    <div className="col-md-6 mb-3 mb-md-0">
      <img src="foto2.jpg" className="img-fluid rounded img-sobre" alt="Foto 2" />
    </div>
    <div className="col-md-6">
      <h3 className="texto">
        😊 Nosso objetivo é facilitar o seu dia a dia, com praticidade, variedade e aquele atendimento próximo que só uma papelaria de bairro consegue oferecer.
      </h3>
    </div>
  </div>
</div>

<br /><br />

<h3 className="texto">
  Seja bem-vindo à <strong style={{ color: 'red' }}>Papelaria Mickey</strong>, onde cada detalhe é pensado com cuidado para você❤️!
</h3>

<HorarioLocal />

            </>
    );
}

export default Sobre;
