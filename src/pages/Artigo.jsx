const data = {
  "volta-aulas": {
    titulo: "Kit Volta às Aulas 2025: O que não pode faltar?",
    data: "29 de julho de 2025",
    imagem: "img-blog1.webp",
    conteudo: `
      <p>Voltar às aulas pode ser empolgante quando estamos com o material novinho em folha! E nada melhor do que montar um kit completo, bonito e funcional. Neste post, separamos dicas essenciais pra você preparar seu material com estilo e organização!</p>

      <h2>1. Estojo completo</h2>
      <p>Um bom estojo é essencial. Priorize modelos com divisórias para facilitar o acesso aos seus lápis, canetas, borracha e marca-textos.</p>

      <h2>2. Cadernos personalizados</h2>
      <p>Seja com capa dura, espiral colorido ou folhas pautadas, os cadernos são o destaque. Você pode combinar com stickers, post-its e capas protetoras.</p>

      <h2>3. Canetas e marca-textos</h2>
      <p>Vale a pena investir em canetas com escrita macia e cores variadas. Os marca-textos pastel continuam em alta!</p>

      <h2>4. Planner ou agenda</h2>
      <p>Ideal para anotar compromissos, tarefas da escola ou metas pessoais. Temos vários modelos incríveis na loja física e no nosso Instagram!</p>

      <h2>5. Extras que fazem a diferença</h2>
      <ul>
        <li>Washi tapes decorativas</li>
        <li>Clips e grampos coloridos</li>
        <li>Mini calculadora</li>
        <li>Adesivos para personalização</li>
      </ul>

      <p><strong>Gostou dessas dicas?</strong> Visite nossa loja ou entre em contato pelo WhatsApp para montar seu kit ideal. E não se esqueça de seguir nosso Instagram @papelariamickey para mais inspirações!</p>
    `
  },

  "lancamentos": {
    titulo: "Lançamentos de Produtos: Confira as Novidades!",
    data: "28 de julho de 2025",
    imagem: "img-blog2.jpg",
    conteudo: `
      <p>A Papelaria Mickey está sempre trazendo produtos novos e criativos para você que ama papelaria. Confira os lançamentos da semana!</p>

      <h2>Destaques:</h2>
      <ul>
        <li>Nova coleção de cadernos com capa holográfica</li>
        <li>Canetas em gel neon e pastel</li>
        <li>Adesivos 3D e planners de mesa</li>
        <li>Marcadores ecológicos com cheirinho</li>
      </ul>

      <p>Todos os produtos já estão disponíveis na loja física e em breve também pelo nosso Instagram. Corre garantir o seu!</p>
    `
  },

  "organizacao": {
    titulo: "Organização e Estudos: Use a Papelaria a Seu Favor",
    data: "27 de julho de 2025",
    imagem: "img-blog3.jpg",
    conteudo: `
      <p>Com a rotina corrida, manter a organização nos estudos ou no trabalho é essencial. E com a papelaria certa, isso fica até divertido!</p>

      <h2>Dicas práticas:</h2>
      <ul>
        <li>Use um planner semanal para visualizar seus compromissos</li>
        <li>Post-its e marcadores ajudam a destacar o importante</li>
        <li>Blocos de checklist facilitam o foco nas tarefas do dia</li>
        <li>Crie um cantinho de estudos com itens que você ama</li>
      </ul>

      <p>Organizar também é uma forma de se cuidar. Invista em você com produtos que inspiram produtividade!</p>
    `
  },

  "canetas": {
    titulo: "Como escolher a melhor caneta para cada tipo de escrita",
    data: "29 de julho de 2025",
    imagem: "img-blog4.jpg",
    conteudo: `
      <p>Você já parou pra pensar como a escolha da caneta influencia na sua escrita? Seja para estudar, trabalhar ou fazer lettering, a caneta certa faz toda a diferença!</p>

      <h2>1. Caneta esferográfica</h2>
      <p>Perfeita para o dia a dia. Tem uma escrita leve, seca rápido e não borra. Ideal para anotações rápidas e uso escolar.</p>

      <h2>2. Caneta em gel</h2>
      <p>Com cores vivas e traço suave, é ótima para quem gosta de personalizar cadernos, fazer títulos ou destacar informações.</p>

      <h2>3. Caneta ponta fina</h2>
      <p>Ideal para planners e letras pequenas. Oferece precisão e ajuda a manter a escrita mais limpa e organizada.</p>

      <h2>4. Caneta brush (pincel)</h2>
      <p>Quer se aventurar no lettering? Essa é a escolha certa! A ponta flexível permite criar traços finos e grossos com estilo.</p>

      <p>Visite nossa papelaria e teste diferentes modelos para descobrir qual combina mais com o seu estilo!</p>
    `
  },

  "decoracao": {
    titulo: "Dicas para decorar seu caderno ou planner",
    data: "29 de julho de 2025",
    imagem: "img-blog5.png",
    conteudo: `
      <p>Transforme seu caderno ou planner em algo único e criativo com essas dicas simples e acessíveis!</p>

      <h2>1. Washi tapes e adesivos</h2>
      <p>Use fitas decorativas e adesivos temáticos para dar cor e alegria às suas páginas.</p>

      <h2>2. Canetas coloridas</h2>
      <p>Escreva títulos, subtítulos e observações em cores diferentes para facilitar a leitura e deixar tudo mais bonito.</p>

      <h2>3. Colagens e recortes</h2>
      <p>Revistas, papéis de presente ou papéis decorativos podem virar arte no seu caderno.</p>

      <h2>4. Estilo bullet journal</h2>
      <p>Adote o estilo bujo e crie layouts semanais, rastreadores de hábitos, listas criativas e mais!</p>

      <p>Decorar também é uma forma de relaxar e se conectar com seus objetivos. Vem se inspirar com a gente!</p>
    `
  }
};

import { useParams } from "react-router-dom";

function Artigo() {
  const { id } = useParams(); // pega o id da URL
  const artigo = data[id];     // busca o artigo pelo id

  if (!artigo) return <p>Artigo não encontrado</p>;

  return (
    <section className="container my-5 blog-article">
      <Link to="/blog" className="btn btn-danger mb-4">&larr; Voltar para o Blog</Link>
      <h1>{artigo.titulo}</h1>
      <p className="text-muted">{artigo.data}</p>
      <img src={artigo.imagem} alt={artigo.titulo} className="img-fluid mb-3" />
      <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
    </section>
  );
}


export default Artigo;
